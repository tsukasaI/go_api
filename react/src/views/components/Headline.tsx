import axios from 'axios'
import { useEffect, useState } from 'react';



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
  const [response, setResponse] = useState<HeadlineResponse>()
  useEffect(() => {
    const fetchHeadline = async () => {
      const res = await axios.get('http://localhost:8087/')
      setResponse(res.data.result.coin.jpyRate)
    }
    fetchHeadline()
  }, [])

  return (
    <div>
      <p>{ response }</p>
    </div>
  )
}

export default Headline;