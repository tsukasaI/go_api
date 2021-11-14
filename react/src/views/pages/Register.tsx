import axios from 'axios'
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { loginAction } from 'reducks/user/actions'

const Register = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const selector = useSelector(state => state)
  const dispatch = useDispatch()

  const register = async () => {
    console.log(!nameRef.current?.value)
    if (!nameRef.current?.value || !passwordRef.current?.value) {
      alert('nameとpasswordを入力してください');
      return;
    }
    try {
      const res = await axios.post('http://localhost:8087/register', {
        name: nameRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch(loginAction(res.data.user))
    } catch (error) {
      alert(error)
      console.log(error)
    }
    console.log(selector)
  }

  return (
    <div>
      <label htmlFor="">name</label>
      <input type="text" ref={nameRef} />
      <label htmlFor="">pass</label>
      <input type="password" ref={passwordRef} />

      <button onClick={register}>register</button>
    </div>
  )
}

export default Register;
