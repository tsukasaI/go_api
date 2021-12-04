import axios from 'axios'
import { useEffect, useState } from 'react';
// import styled from "styled-components";
import { useSelector } from 'react-redux'
import { getUserToken } from 'reducks/user/selectors'


type Coin = {
  date: String,
  jpyRate: Number,
  usdRate: Number,
}

type Qiita = {
  date: String,
  description: String,
  tags: [{
    name: String,
    versions: any
  }],
  title: String,
}

type Weather = {
  description: String,
  feel: Number,
  humidity: Number,
  pressure: Number,
  temp: Number,
  time: String,
  weather: String,
}

type HeadlineResponse = {
  coin: Coin,
  weather: Weather[],
  qiita: Qiita[],
}

const Headline = () => {
  const selector = useSelector((state) => state)
  const token = getUserToken(selector)
  const [response, setResponse] = useState<HeadlineResponse>()
  useEffect(() => {
    const fetchHeadline = async () => {
      try {
        const res = await axios.get('http://localhost:8087/', { headers: { Authorization: "Bearer " + token } })
        setResponse(res.data.result.coin.jpyRate)
      } catch (e: any) {
        alert(e.message)
      }
    }
    fetchHeadline()
  }, [token])

  return (
    <div>
      <p>{ response }</p>
    </div>
  )
}

export default Headline;
