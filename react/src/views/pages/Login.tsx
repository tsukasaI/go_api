import axios from 'axios'
// import { useEffect, useState } from 'react';
import { getUserToken } from '../../reducks/user/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../reducks/user/actions'

const Login = () => {
  const login = async () => {
    const res = await axios.post('http://localhost:8087/login', { name: 'hogehoge', token: 'acs' })
    dispatch(loginAction({
      name: res.data.name,
      token: res.data.token,
    }))
  }

  const selector = useSelector(state => state)
  const token = getUserToken(selector)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>{token}</h3>
      <button onClick={login}>ログイン</button>
    </div>
  )
}

export default Login;
