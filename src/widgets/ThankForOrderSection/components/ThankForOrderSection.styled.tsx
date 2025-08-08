import styled from '@emotion/styled'
import Picture from '@/components/ui/Picture'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
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

export const StyledTitle = styled.h1`
  padding: 0 ${responsiveSizing(30, 92)} ${responsiveSizing(60, 104)};
  color: var(--color-navy-100);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    padding: 0 ${responsiveSizing(92, 287)} 104px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 ${responsiveSizing(287, 586)} ${responsiveSizing(104, 160)};
  }
  @media screen and (min-width: 1920px) {
    padding: 0 586px 160px;
  }
`
