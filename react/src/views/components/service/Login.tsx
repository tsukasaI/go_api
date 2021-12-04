import axios from 'axios'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { loginAction } from 'reducks/user/actions'

import { Input } from 'views/components/base'

const LoginWrapper = styled.div`
  width: 350px;
`

const RegisterInduction = styled.div`
  margin: 24px 0;
  text-align: center;
`

const Login = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const selector = useSelector((state) => state)
  const dispatch = useDispatch()

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:8087/login', {
        name: nameRef.current?.value,
        token: passwordRef.current?.value,
      })
      dispatch(loginAction(res.data.user))
      sessionStorage.setItem('id', res.data.user.id)
      sessionStorage.setItem('name', res.data.user.name)
      sessionStorage.setItem('token', res.data.user.token)
      return <Navigate to="/home" />
    } catch (error) {
      console.log(error)
    }
    console.log(selector)
  }

  return (
    <LoginWrapper>
      <Input type="text" placeholder="Username" name="name" ref={nameRef} />

      <Input type="password" placeholder="Password" ref={passwordRef} />

      <button
        onClick={login}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-center w-9/12 block mx-auto"
      >
        Login
      </button>

      <RegisterInduction>
        <p>
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-600 ml-2 hover:text-blue-400 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </RegisterInduction>
    </LoginWrapper>
  )
}

export default Login
