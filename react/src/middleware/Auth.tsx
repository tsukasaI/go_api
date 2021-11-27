import * as React from 'react'

import { Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { getUserToken } from 'reducks/user/selectors'

type Props = {
  path: string
  element: React.ReactElement<any, any>
}

const Auth = (props: Props) => {
  const selector = useSelector((state) => state)
  const token = getUserToken(selector)

  const publicPaths = ['/', '/login', '/register']

  if (!publicPaths.includes(props.path)) {
    return token !== '' ? props.element : <Navigate to="/login" />
  }
  return token !== '' ? <Navigate to="/home" /> : props.element
}

export default Auth