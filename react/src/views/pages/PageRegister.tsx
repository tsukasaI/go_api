import axios from 'axios'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { loginAction } from 'reducks/user/actions'
import { Input } from 'views/components/base'
import styled from 'styled-components'


const RegisterWrapper = styled.div`
  width: 350px;
  margin: 24px 0;
`

const Register = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const register = async () => {
    if (!nameRef.current?.value || !passwordRef.current?.value) {
      alert('nameとpasswordを入力してください')
      return
    }
    try {
      const res = await axios.post('http://localhost:8087/register', {
        name: nameRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch(loginAction(res.data.user))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <RegisterWrapper>
      <Input type="text" placeholder="Username" name="name" ref={nameRef} />

      <Input type="password" placeholder="Password" ref={passwordRef} />

      <button
        onClick={register}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-center w-9/12 block mx-auto"
      >
        Sign up
      </button>
    </RegisterWrapper>
  )
}

export default Register
