import * as React from 'react'
import axios from 'axios'

import { Navigate } from 'react-router-dom'
import { loginAction } from 'reducks/user/actions'

import { useSelector, useDispatch } from 'react-redux'
import { getUserToken } from 'reducks/user/selectors'

type Props = {
  path: string
  element: React.ReactElement<any, any>
}

const checkToken = async (token: string) => {
  try {
    console.log('axios called')
    const res = await axios.get('http://localhost:8087/check', {
      headers: { Authorization: 'Bearer ' + token },
    })
    return res.data.status === 200
  } catch (e) {
    return false
  }
}

const Auth = (props: Props) => {
  const selector = useSelector((state) => state)
  let token = getUserToken(selector)
  const dispatch = useDispatch()

  if (token === '') {
    token = sessionStorage.getItem('token') ?? ''
    if (token && checkToken(token)) {
      const name = sessionStorage.getItem('name') ?? ''
      const id = sessionStorage.getItem('id')
        ? Number(sessionStorage.getItem('id'))
        : 0

      dispatch(
        loginAction({
          id: id,
          name: name,
          token: token,
        })
      )
    }
  }

  const publicPaths = ['/', '/login', '/register']

  if (!publicPaths.includes(props.path)) {
    return token !== '' ? props.element : <Navigate to="/login" />
  }
  return token !== '' ? <Navigate to="/home" /> : props.element
}

export default Auth
