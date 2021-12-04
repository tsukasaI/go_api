import styled from 'styled-components'
import { Image } from 'views/components/base'

const Bold = styled.b`
  font-size: 18px;
  margin: 0 .3rem
`


const Coin = (props: any) => {
  return (
    <div className="flex justify-center items-center">
      <Image src={`${process.env.PUBLIC_URL}/bitcoin-btc-logo.svg`} width="40" alt="bitcoin" />
      <Bold>{new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(props.props.jpyRate)}</Bold>
      <Bold>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.props.usdRate)}</Bold>
    </div>
  )

}

export default Coin
