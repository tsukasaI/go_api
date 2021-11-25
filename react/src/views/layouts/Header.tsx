import styled from 'styled-components';
import { Image } from 'views/components/base';
import { Today } from 'views/components/util';
import { useSelector } from 'react-redux'
import { getUserName } from 'reducks/user/selectors'

import { Link } from 'react-router-dom'

const CommonHeader = styled.header`
  background-color: #242424;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px
`

const LogoWrapper = styled(Link)`
  display: block;
  margin-left: 16px
`

const Greet = styled.div`
  height: 100%;
  max-width: 200px;
  color: #ffffff;
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    max-width: 200px;
  }
`
const message = (): string => {
  const hour = (new Date()).getHours()
  let message: string
  switch (true) {
    case hour < 5 || 17 < hour:
      message = 'お疲れさまです。'
      break;
    case hour < 10:
      message = 'おはようございます。'
      break;
    default:
      message = 'こんにちは。'
      break;
  }
  return message
}

const Header = () => {
  const selector = useSelector((state) => state)
  const name = getUserName(selector)

  return (
    <CommonHeader>
      <Greet>
        {name !== '' ? `${message()} ${name}様` : undefined}
      </Greet>

        <LogoWrapper to="/">
          <Image src={`${process.env.PUBLIC_URL}/logo.gif`} alt="Logo" height="100%" width="auto" />
        </LogoWrapper>

        <Today />
    </CommonHeader>
  )
}

export default Header
