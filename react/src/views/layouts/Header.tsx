import styled from 'styled-components';
import { Image } from 'views/components/base';
import { Today } from 'views/components/util';

import { Link } from 'react-router-dom'

const CommonHeader = styled.header`
  background-color: #242424;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
`

const ImageWrapper = styled(Link)`
  display: block;
`

const Header = () => {
  return (
    <CommonHeader>
      <div>hogehoge</div>
      <ImageWrapper to="/">
        <Image src={`${process.env.PUBLIC_URL}/logo.gif`} alt="Logo" height="100%" />
      </ImageWrapper>
      <Today></Today>
    </CommonHeader>
  )
}

export default Header
