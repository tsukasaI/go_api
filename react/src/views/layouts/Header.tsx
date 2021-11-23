import styled from 'styled-components';
import { Image } from 'views/components/base';

const CommonHeader = styled.header`
  background-color: #242424;
  width: 100%;
  height: 70px;
`



const Header = () => {
  return (
    <CommonHeader>
      <Image src={`${process.env.PUBLIC_URL}/logo.gif`} alt="Logo" height="100%" ></Image>
    </CommonHeader>
  )
}

export default Header
