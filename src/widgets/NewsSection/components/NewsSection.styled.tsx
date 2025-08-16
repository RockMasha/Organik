import Picture from '@/components/ui/Picture'
import Title from '@/components/ui/Title'
import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(60, 160, 320, 1440)};
  padding-bottom: ${responsiveSizing(30, 50)};
`

export const StyledMark = styled.p`
  color: var(--color-green-200);
  font-family: Yellowtail;
  font-size: 26px;
  line-height: 1.8;
  letter-spacing: 0.36px;
`

export const StyledTitle = styled(Title)`
  margin-bottom: 46px;
  @media (min-width: 768px) {
    margin-bottom: ${responsiveSizing(46, 70)};
  }
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: ${responsiveSizing(28, 50)};
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.36px;
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const StyledItem = styled.li`
  border-radius: 30px;
  background: var(--color-white-100);
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.14);
`

export const StyledPicture = styled(Picture)`
  display: block;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export const StyledSvg = styled.img`
  width: 18px;
  height: 20px;
`

export const StyledName = styled.p`
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: 18px;
  line-height: 1.3;
`

export const PositionedDiv = styled.div`
  position: absolute;
  left: 13px;
  top: 12px;
  padding: 10px 20px;
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: 19px;
  font-weight: 700;
  background-color: var(--color-white-100);
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 16px 20px;
    font-size: 25px;
    border-radius: 100px;
    left: ${responsiveSizing(13, 45, 768, 1920)};
    top: ${responsiveSizing(12, 50, 768, 1920)};
  }
`

export const StyledTitleCard = styled.h3`
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: ${responsiveSizing(18, 24, 320, 1440)};
  font-weight: 700;
  line-height: 1.4;
`

export const StyledTextCard = styled.p`
  color: var(--color-gray-100);
  font-family: 'Open Sans';
  font-size: 17px;
  line-height: 1.8;
`

export const StyledFormText = styled(Title)`
  color: var(--color-white-100);
  text-align: center;
  font-family: Roboto;
  font-size: ${responsiveSizing(33, 50, 320, 1920)};
  font-weight: 700;
  line-height: 1.2;
  @media (min-width: 768px) {
    width: 323px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    margin: 0;
    text-align: left;
  }
`

export const StyledFormBackground = styled.div`
  margin-top: 140px;
  padding: 65px 20px;
  ${getImageBackground('blue_lemons')}
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  @media (min-width: 320px) {
    padding-top: ${responsiveSizing(65, 100, 320, 768)};
    padding-bottom: ${responsiveSizing(65, 100, 320, 768)};
    padding-left: ${responsiveSizing(20, 70, 320, 1440)};
    padding-right: ${responsiveSizing(20, 70, 320, 1440)};
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid var(--color-gray-400);
  background: var(--color-white-100);
  @media (min-width: 1440px) {
    width: 350px;
    height: 82px;
  }
`

export const StyledFormButton = styled.button`
  width: 100%;
  height: 71px;
  margin-top: 10px;
  color: var(--color-white-100);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  border-radius: 16px;
  border: 1px solid var(--color-navy-100);
  background: var(--color-navy-100);
  @media (min-width: 1440px) {
    width: 200px;
    height: 82px;
    margin-left: 10px;
  }
`
