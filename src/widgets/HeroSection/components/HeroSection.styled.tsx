import styled from '@emotion/styled'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import Title from '@/components/ui/Title'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/Container'
import { getImageBackground } from '@/styles/helpers/getImageBackground'

export const Section = styled.section`
  text-align: left;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 1440px) {
    text-align: left;
  }
  ${getImageBackground('choose-the-best')}
`

export const StyledContainer = styled(Container)`
  padding: ${responsiveSizing(79, 110, 320, 768)}
    ${responsiveSizing(20, 30, 320, 768)} ${responsiveSizing(90, 120, 320, 768)};
  @media (min-width: 768px) {
    padding: ${responsiveSizing(100, 220, 768, 1440)} 30px
      ${responsiveSizing(120, 250, 768, 1440)};
  }
  @media (min-width: 1440px) {
    padding: 220px ${responsiveSizing(30, 260, 1440, 1920)} 250px;
  }
  @media (min-width: 1920px) {
    padding: 220px 260px 250px;
  }
`

export const StyledTitle = styled(Title)`
  width: ${responsiveSizing(260, 380, 320, 768)};
  margin-top: ${responsiveSizing(15, 30, 320, 768)};
  @media (min-width: 768px) {
    width: ${responsiveSizing(380, 500, 768, 1440)};
    margin-top: 30px;
  }
  @media (min-width: 1440px) {
    width: 500px;
  }
`

export const StyledButton = styled(Button)`
  margin-top: 30px;
`
