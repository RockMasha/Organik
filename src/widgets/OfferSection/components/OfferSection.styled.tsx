import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  margin-top: ${responsiveSizing(80, 140)};
  margin-bottom: ${responsiveSizing(30, 50)};
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${responsiveSizing(20, 50)};
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

export const ItemNatural = styled.li`
  width: 100%;
  padding: ${responsiveSizing(40, 90, 320, 1440)}
    ${responsiveSizing(20, 52, 320, 1440)};
  ${getImageBackground('get-fresh')}
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
`

export const ItemOffer = styled.li`
  width: 100%;
  padding: ${responsiveSizing(40, 90, 320, 1440)}
    ${responsiveSizing(20, 52, 320, 1440)};
  ${getImageBackground('get-10-on')}
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
`

export const StyledText = styled.p`
  color: ${({ color }) => color};
  font-family: Yellowtail;
  font-size: ${responsiveSizing(32, 36)};
  line-height: 1.8;
  letter-spacing: 0.36px;
`
export const StyledTitle = styled.h2`
  color: ${({ color }) => color};
  font-family: Roboto;
  font-size: ${responsiveSizing(26, 40)};
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.36px;

  span {
    display: block;
  }
`
