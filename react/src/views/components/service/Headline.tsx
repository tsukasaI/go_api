import axios from 'axios'
import { useEffect, useState } from 'react'
import { Coin, Qiita, Weather } from 'views/components/service'


import { useSelector } from 'react-redux'
import { getUserToken } from 'reducks/user/selectors'

type TypeCoin = {
  date: String
  jpyRate: Number
  usdRate: Number
}

type TypeQiita = {
  date: String
  description: String
  tags: [
    {
      name: String
      versions: any
    }
  ]
  title: String
}

type TypeWeather = {
  description: String
  feel: Number
  humidity: Number
  pressure: Number
  temp: Number
  time: String
  weather: String
}

type HeadlineResponse = {
  coin: TypeCoin
  weather: TypeWeather[]
  qiita: TypeQiita[]
}

const Headline = () => {
  const selector = useSelector((state) => state)
  const token = getUserToken(selector)
  const [response, setResponse] = useState<HeadlineResponse>()
  useEffect(() => {
    const fetchHeadline = async () => {
      try {
        const res = await axios.get('http://localhost:8087/', {
          headers: { Authorization: 'Bearer ' + token },
        })
        setResponse(res.data.result)
      } catch (e: any) {
        alert(e.message)
        alert('please login again')
      }
    }
    fetchHeadline()
  }, [token])

  const logout = () => {
    sessionStorage.clear()
    window.location.href = '/login'
  }

  return response ? (
    <div>
      <Weather props={response.weather} />

      <Coin props={response.coin} />

      <Qiita props={response.qiita} />
    </div>
  ) : (
    <div>
      ...Loading
      <p>Anything Wrong?</p>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded block"
      >
        Logout
      </button>
    </div>
  )
}

export default Headline
