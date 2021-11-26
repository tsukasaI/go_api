import * as React from 'react'

import { PageLogin } from 'views/pages/index'
import { useSelector } from 'react-redux'
import { getUserToken } from 'reducks/user/selectors'

type Props = {
  path: string
  element: React.ReactElement<any, any>
}

const Auth = (props: Props) => {
  const selector = useSelector((state) => state)
  const token = getUserToken(selector)

  return token !== '' ? props.element : <PageLogin />
}

export default Auth
