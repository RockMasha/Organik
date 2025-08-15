import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'
import Container from '@/components/ui/Container'

export const Section = styled.section`
  background-color: var(--color-gray-700);
  padding-top: ${responsiveSizing(30, 100, 320, 1440)};
  padding-bottom: ${responsiveSizing(60, 140, 320, 1440)};
`

export const StyledContainer = styled(Container)`
  @media (min-width: 1440px) {
    padding: 0;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
  }

  li:nth-child(1) {
    ${getImageBackground('yello-drink')}
    background-repeat: no-repeat;
    background-size: cover;
  }

  li:nth-child(2) {
    ${getImageBackground('green_cucumber')}
    background-repeat: no-repeat;
    background-size: cover;
  }

  li:nth-child(3) {
    ${getImageBackground('cookies')}
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 114px 36px;
  @media (min-width: 320px) {
    padding-top: ${responsiveSizing(114, 214, 320, 768)};
    padding-bottom: ${responsiveSizing(114, 214, 320, 768)};
    padding-left: ${responsiveSizing(36, 50, 320, 768)};
    padding-right: ${responsiveSizing(36, 50, 320, 768)};
  }
  @media (min-width: 768px) {
    padding-top: ${responsiveSizing(214, 242, 768, 1440)};
    padding-bottom: ${responsiveSizing(214, 242, 768, 1440)};
    padding-left: ${responsiveSizing(50, 90, 768, 1440)};
    padding-right: ${responsiveSizing(50, 90, 768, 1440)};
  }
  @media (min-width: 1440px) {
    padding-left: ${responsiveSizing(90, 153, 1440, 1920)};
    padding-right: ${responsiveSizing(90, 153, 1440, 1920)};
  }
`

export const Button = styled.button`
  width: 236px;
  height: 71px;
  @media (min-width: 768px) {
    width: ${responsiveSizing(236, 282, 768, 1440)};
    height: ${responsiveSizing(71, 95, 768, 1440)};
  }
  @media (min-width: 1440px) {
    font-size: 25px;
  }
  border-radius: 20px;
  background: var(--color-white-100);
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
`
