import StarRate from '@/components/modules/StarRate/StarRate'
import Container from '@/components/ui/Container'
import Text from '@/components/ui/Text'
import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(170, 200)};
  padding-bottom: ${responsiveSizing(120, 150)};
  ${getImageBackground('what-customer')}
  background-size: cover;
`

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${responsiveSizing(206, 980, 320, 1920)};
  padding-bottom: 87px;
  border-bottom: 2px solid var(--color-gray-500);
`

export const StyledDescript = styled(Text)`
  margin-bottom: 45px;
  color: var(--color-gray-100);
  text-align: center;
  font-family: 'Open Sans';
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.36px;
`

export const StyledNameDescrp = styled(Text)`
  color: var(--color-gray-100);
  text-align: center;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 1.8;
  letter-spacing: 0.36px;
`

export const StyledStarRate = styled(StarRate)`
  margin: 17px 0;
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 80px;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
  }
`
