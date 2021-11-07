import axios from 'axios'
// import { useEffect, useState } from 'react';
import { getUserToken } from '../../reducks/user/selectors'
import {useSelector} from 'react-redux'


const Login = () => {
  const login = async () => {
    console.log('click')
    console.log(token)
    console.log(selector)
    const res = await axios.post('http://localhost:8087/login', {name: 'hogehoge', token: 'acs'})
    console.log(res);
  }

  const selector = useSelector(state => state)
  const token = getUserToken(selector)

  return (
    <div>
      <h3>{token}</h3>
      <button onClick={login}>送信</button>
    </div>
  )
}

export default Login;
