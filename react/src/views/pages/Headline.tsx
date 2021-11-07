import axios from 'axios'
import { useEffect, useState } from 'react';

const Headline = () => {
  var tmp: any
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
