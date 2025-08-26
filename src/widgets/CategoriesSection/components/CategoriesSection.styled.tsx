import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'
import Container from '@/components/ui/Container'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  padding-top: ${responsiveSizing(30, 100, 320, 1440)};
  padding-bottom: ${responsiveSizing(60, 140, 320, 1440)};
  background-color: var(--color-gray-700);
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
`

interface ItemProps {
  bg: 'yello-drink' | 'green_cucumber' | 'cookies'
}

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 114px 36px;
  ${({ bg }: ItemProps) => getImageBackground(bg)};
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

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

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 40px;
  @media (min-width: 768px) {
    padding-top: ${responsiveSizing(20, 30, 768, 1440)};
    padding-bottom: ${responsiveSizing(20, 30, 768, 1440)};
    padding-left: ${responsiveSizing(40, 80, 768, 1440)};
    padding-right: ${responsiveSizing(40, 80, 768, 1440)};
  }
  @media (min-width: 1440px) {
    font-size: 25px;
  }
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  border-radius: 20px;
  background: var(--color-white-100);
`
