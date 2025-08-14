import styled from '@emotion/styled'
import Picture from '@/components/ui/Picture'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import Title from '@/components/ui/Title'

export const Section = styled.section`
  padding-top: ${responsiveSizing(30, 40)};
  @media (min-width: 768px) {
    padding-top: ${responsiveSizing(40, 102)};
  }
  @media (min-width: 1440px) {
    padding-top: ${responsiveSizing(102, 160)};
  }
`

export const StyledPicture = styled(Picture)`
  img {
    min-width: 100%;
  }
`

export const StyledTitle = styled(Title)`
  margin-bottom: ${responsiveSizing(22, 44)};
  color: var(--color-navy-100);
  text-align: center;
`
