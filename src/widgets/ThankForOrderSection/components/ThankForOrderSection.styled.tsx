import styled from '@emotion/styled'
import Picture from '@/components/ui/Picture'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import Title from '@/components/ui/Title'
export const Section = styled.section`
  margin-top: ${responsiveSizing(30, 40)};
  @media screen and (min-width: 768px) {
    margin-top: ${responsiveSizing(40, 102)};
  }
  @media screen and (min-width: 1440px) {
    margin-top: ${responsiveSizing(102, 160)};
  }
`
export const StyledPicture = styled(Picture)`
  display: flex;
  justify-content: center;
  min-width: 100%;
`

export const StyledTitle = styled(Title)`
  padding: 0 ${responsiveSizing(30, 50)} ${responsiveSizing(60, 104)};
  color: var(--color-navy-100);
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 0 ${responsiveSizing(50, 287)} 104px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 ${responsiveSizing(287, 420)} ${responsiveSizing(104, 160)};
  }
  @media screen and (min-width: 1920px) {
    padding: 0 420px 160px;
  }
`
