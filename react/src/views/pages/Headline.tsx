import axios from 'axios'
import { useEffect, useState } from 'react';

type HeadlineResponse = {
  coin: {
    date: string,
    jpyRate: string,
    usdRate: string,
  },
  qiita: [{
    date: string,
    description: string,
    title: string,
    tags: [{
      name: string,
      versions: Array<any>,
    }],
  }],
  weather: [{
    description: string,
    feel: Number,
    humidity: Number,
    pressure: Number,
    temp: Number,
    time: string,
    weather: string,
  }],
}

const Headline = () => {
  let tmp: HeadlineResponse | undefined
  const [response, setResponse] = useState(tmp)
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
