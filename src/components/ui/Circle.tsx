import styled from '@emotion/styled'
import Title from './Title'

const StyledWrapper = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 5px solid var(--color-green-200);
  padding: 6px;
  background: #fff;
  box-sizing: border-box;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--color-white-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledTitle = styled(Title)`
  color: var(--color-navy-100);
  text-align: center;
  font-family: Roboto;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.36px;
`

export const StyledText = styled.p`
  color: var(--color-navy-100);
  text-align: center;
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 600;
  line-height: 1.8;
  letter-spacing: 0.36px;
`

type CircleProps = {
  number: string
  text: string
}

function Circle({ number, text }: CircleProps) {
  return (
    <StyledWrapper>
      <Inner>
        <StyledTitle type="h3-thin">{number}</StyledTitle>
        <StyledText>{text}</StyledText>
      </Inner>
    </StyledWrapper>
  )
}

export default Circle
