import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  margin: 16px;
`

const Headline1 = styled.h1`
  font-weight: bold;
  font-size: 24px
`
const Headline2 = styled.h2`
  font-weight: bold;
  font-size: 18px
`

const PageWelcome = () => {
  return (
    <WelcomeWrapper>
      <Headline1>Welcome to Ysem</Headline1>
      <p>We will give you greater days by supporting info</p>

      <Headline2>First of all, Register only by name and Password</Headline2>
      <Link to="/register">Register</Link>

      <Headline2>Have you already registered? Login from here</Headline2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">hogehoge</button>
      <Link to="/login">Login</Link>

      <p>Ysem means Your secretary for effective morning</p>
    </WelcomeWrapper>
  )
}

export default PageWelcome
