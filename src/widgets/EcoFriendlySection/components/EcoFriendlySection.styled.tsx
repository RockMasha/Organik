import Title from '@/components/ui/Title'
import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 95px;
  @media (min-width: 768px) {
    padding: 40px 0;
  }
`

export const BackgroundPicture = styled.div`
  position: relative;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  height: ${responsiveSizing(312, 720, 320, 1440)};
  ${getImageBackground('land')}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 1440px) {
    width: 50vw;
    height: ${responsiveSizing(720, 790, 1440, 1920)};
    margin-left: 0;
    transform: none;
    background-position: left;
  }
`

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    position: absolute;
    top: ${responsiveSizing(80, 90, 1440, 1920)};
    left: ${responsiveSizing(660, 900, 1440, 1920)};
    width: 720px;
    padding: 40px 40px 54.99px 60px;
    border-radius: 30px 0 0 30px;
    background-color: var(--color-white-100);
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`

export const ListTitle = styled(Title)`
  font-weight: 500;
  line-height: 1.4;
  text-transform: capitalize;
`
