import styled from '@emotion/styled'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import Title from '@/components/ui/Title'
import { LinkButton } from '@/components/ui/button'
import { getImageBackground } from '@/styles/helpers/getImageBackground'

export const Section = styled.section`
  padding-top: ${responsiveSizing(79, 110, 320, 768)};
  padding-bottom: ${responsiveSizing(90, 120, 320, 768)};
  @media (min-width: 768px) {
    padding-top: ${responsiveSizing(100, 220, 768, 1440)};
    padding-bottom: ${responsiveSizing(120, 250, 768, 1440)};
  }
  @media (min-width: 1440px) {
    padding-top: 220px;
    padding-bottom: 250px;
  }
  text-align: left;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 1440px) {
    text-align: left;
  }
  ${getImageBackground('choose-the-best')}
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

export const StyledButton = styled(LinkButton)`
  margin-top: 30px;
`
