import styled from 'styled-components';
import { Image } from 'views/components/base';

const CommonFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #333333;
  color: #ffffff
`

const Footer = () => {
  return (
    <CommonFooter>
      <Image src={`${process.env.PUBLIC_URL}/logo.gif`} alt="Logo" width="100px" />
      <p>presented by Tsukasa Inoue</p>
    </CommonFooter>
  )
}

export default Footer
