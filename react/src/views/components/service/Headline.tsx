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

  return response ? (
    <div>
      <Weather props={response.weather} />

      <Coin props={response.coin} />

      <Qiita props={response.qiita} />
    </div>
  ) : (
    <div>...Loading</div>
  )
}

export default Headline
