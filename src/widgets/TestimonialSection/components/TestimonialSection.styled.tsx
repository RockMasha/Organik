import StarRate from '@/components/modules/StarRate/StarRate'
import Container from '@/components/ui/Container'
import Title from '@/components/ui/Title'
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
  align-items: center;
  justify-content: center;
  width: ${responsiveSizing(206, 980, 320, 1920)};
  padding-bottom: 87px;
  border-bottom: 2px solid var(--color-gray-500);

  @media (max-width: 768px) {
    .arrow {
      display: none;
    }
  }

  .testimonial-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .arrow {
    width: 40px;
    height: 40px;
    cursor: pointer;
    fill: var(--color-green-200);
    transition: transform 0.2s;
  }

  .arrow-left {
    position: absolute;
    left: -60px;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
  }

  .arrow-right {
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const StyledTitle = styled(Title)`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${responsiveSizing(24, 50)};
`

export const MarkedText = styled.p`
  color: var(--color-green-200);
  text-align: center;
  font-family: Yellowtail;
  font-size: 26px;
  line-height: 1.8;
  letter-spacing: 0.36px;
  text-transform: capitalize;
`

export const StyledDescript = styled.p`
  color: var(--color-gray-100);
  text-align: center;
  font-family: 'Open Sans';
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.36px;
`

export const StyledName = styled.h3`
  margin-top: 25px;
  color: var(--color-navy-100);
  text-align: center;
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.36px;
`

export const StyledNameDescrp = styled.p`
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
