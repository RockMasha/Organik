import { BoldText, StyledText, Inner, Wrapper } from './InfoCircle.styled'

type CircleProps = {
  number: string
  text: string
}

function InfoCircle({ number, text }: CircleProps) {
  return (
    <Wrapper>
      <Inner>
        <BoldText>{number}</BoldText>
        <StyledText>{text}</StyledText>
      </Inner>
    </Wrapper>
  )
}

export default InfoCircle
