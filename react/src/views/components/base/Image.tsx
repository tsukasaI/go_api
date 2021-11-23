import styled from 'styled-components';

type ImageProps = {
  src: string,
  alt: string
  width: string,
  height: string,
}

const CommonImage = styled.img.attrs<ImageProps>((props: ImageProps) => ({
  type: 'text',
  width: props.width !== '' ? props.width : 'auto',
  height: props.height !== '' ? props.height : 'auto',

})) <ImageProps>`
    width: ${(props: ImageProps) => props.width}
    height: ${(props: ImageProps) => props.height}
`

const Image = (props: any) => {
  return (
    <CommonImage src={props.src} alt={props.alt} width={props.width} height={props.height} />
  )
}

export default Image
