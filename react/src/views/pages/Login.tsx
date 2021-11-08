import axios from 'axios'
import { useRef } from 'react';
import { getUserToken } from '../../reducks/user/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../reducks/user/actions'

const Login = () => {
  const nameRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)

  const selector = useSelector(state => state)
  const token = getUserToken(selector)
  const dispatch = useDispatch()

  const check = async () => {
    const res = await axios.post('http://localhost:8087/login', {
       name: nameRef.current.value,
       token: passwordRef.current.value,
    })
    console.log(res)
    dispatch(loginAction(res.data.user))
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
