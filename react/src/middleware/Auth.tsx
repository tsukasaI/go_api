import * as React from 'react'

import { Navigate } from 'react-router-dom'
import { loginAction } from 'reducks/user/actions'

import { useSelector, useDispatch } from 'react-redux'
import { getUserToken } from 'reducks/user/selectors'

type Props = {
  path: string
  element: React.ReactElement<any, any>
}

const Auth = (props: Props) => {
  const selector = useSelector((state) => state)
  let token = getUserToken(selector)
  const dispatch = useDispatch()

  if (token === '') {
    token = sessionStorage.getItem('token') ?? ''
    const name = sessionStorage.getItem('name') ?? ''
    const id = sessionStorage.getItem('id') ? Number(sessionStorage.getItem('id')) : 0
    if (token !== '' && id !== 0 && name !== '') {
      dispatch(loginAction({
          id: id,
          name: name,
          token: token,
        }))

    }

  }


  const publicPaths = ['/', '/login', '/register']

  if (!publicPaths.includes(props.path)) {
    return token !== '' ? props.element : <Navigate to="/login" />
  }
  return token !== '' ? <Navigate to="/home" /> : props.element
}

export default Auth
