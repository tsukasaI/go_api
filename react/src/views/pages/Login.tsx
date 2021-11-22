import axios from 'axios'
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getUserToken } from 'reducks/user/selectors'
import { loginAction } from 'reducks/user/actions'

type User = {
  name: String,
  token: String
}

const Login = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const selector = useSelector((state: User) => state)
  const token = getUserToken(selector)
  const dispatch = useDispatch()

  const check = async () => {
    try {
      const res = await axios.post('http://localhost:8087/login', {
         name: nameRef.current?.value,
         token: passwordRef.current?.value,
      })
      dispatch(loginAction(res.data.user))
    } catch (error) {
      console.log(error)
    }
    console.log(selector)
  }

  return (
    <div>
      <h3>{token}</h3>
      <label htmlFor="">name</label>
      <input type="text" ref={nameRef} />
      <label htmlFor="">pass</label>
      <input type="password" ref={passwordRef} />

      <button onClick={check}>check</button>
    </div>
  )
}

export default Login;
