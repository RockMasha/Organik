import styled from '@emotion/styled'
import Text from '@/components/ui/Text'
import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import { getImageBackground } from '@/styles/helpers/getImageBackground'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 30px;
  padding: ${responsiveSizing(60, 100, 768, 1440)} 20px
    ${responsiveSizing(70, 115, 768, 1440)};
  text-align: end;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    padding: ${responsiveSizing(100, 160, 768, 1440)};
    ${responsiveSizing(20, 30, 768, 1440)};
    ${responsiveSizing(115, 170, 768, 1440)};
    ${responsiveSizing(20, 840, 768, 1440)};
  }

  @media (min-width: 1440px) {
    padding: 160px ${responsiveSizing(30, 307, 1440, 1920)} 170px
      ${responsiveSizing(840, 1105, 1440, 1920)};
    text-align: left;
  }

  ${getImageBackground('404')}
`

export const StyledText = styled(Text)`
  letter-spacing: 0.36px;
  margin-top: 10px;
`

export const StyledButton = styled(Button)`
  margin-top: 30px;
`

export const StyledTitle = styled.h1`
  color: var(--color-green-100);
  line-height: 0.8;
  font-size: ${responsiveSizing(100, 220, 320, 768)};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: ${responsiveSizing(220, 300, 768, 1440)};
  }

  @media (min-width: 1440px) {
    font-size: 300px;
  }
`
