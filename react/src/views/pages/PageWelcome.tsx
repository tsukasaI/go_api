import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Login } from 'views/components/service'

const WelcomeWrapper = styled.div`
  margin: 16px;
`

const Headline1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-top: 12px;
`
const Headline2 = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-top: 12px;
`

const PageWelcome = () => {
  return (
    <WelcomeWrapper>
      <Headline1>Welcome to Ysem</Headline1>
      <p>We will give you greater days by supporting info</p>

      <Headline2>First of all, Register your information</Headline2>
      <p className="mb-4">You can use only by name and Password</p>
      <Link
        to="/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </Link>

      <Headline2>Have you already registered? Login from here</Headline2>
      <Login />


      <p>Ysem means Your secretary for effective morning</p>
    </WelcomeWrapper>
  )
}

export default PageWelcome
