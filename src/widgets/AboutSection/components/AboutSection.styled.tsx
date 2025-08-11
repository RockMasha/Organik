import styled from '@emotion/styled'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
import { Button } from '@/components/ui/button'
import IconOrganicFood from '@/assets/icons/organic-food-icon.svg?react'
import Container from '@/components/ui/Container'
import IconQuality from '@/assets/icons/quality-icon.svg?react'
export const Section = styled.section`
  background: var(--color-white-200);
  margin-top: ${responsiveSizing(30, 40, 320, 768)};
  padding-top: ${responsiveSizing(70, 100, 320, 768)};
  padding-bottom: 110px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding-top: ${responsiveSizing(100, 130, 768, 1440)};
    padding-bottom: ${responsiveSizing(110, 140, 768, 1440)};
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: ${responsiveSizing(40, 50, 1440, 1920)};
    padding-top: ${responsiveSizing(130, 219, 1440, 1920)};
    padding-bottom: ${responsiveSizing(140, 150, 1440, 1920)};
  }
  @media screen and (min-width: 1920px) {
    margin-top: 50px;
    padding-top: 219px;
    padding-bottom: 150px;
  }
`
export const StyledContainer = styled(Container)`
  @media screen and (min-width: 1440px) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
  }
`
export const StyledText = styled(Text)`
  margin-top: 18px;
  font-weight: 200;
`

export const StyledTitle = styled(Title)`
  margin-top: 10px;
  width: ${responsiveSizing(260, 400, 320, 768)};
  @media screen and (min-width: 768px) {
    width: ${responsiveSizing(400, 500, 768, 1440)};
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
  }
`
export const StyledOrganicIcon = styled(IconOrganicFood)`
  width: 100px;
  height: 100px;
  padding: 27px 23.5px;
  border-radius: 20px;
  background: var(--color-white-100);
  path {
    stroke: var(--color-green-200);
    fill: var(--color-green-200);
  }
`
export const StyledIconQuality = styled(IconQuality)`
  width: 100px;
  height: 100px;
  padding: 27px 23.5px;
  border-radius: 20px;
  background: var(--color-white-100);
  path {
    stroke: var(--color-green-200);
    fill: var(--color-green-200);
  }
`
export const StyledDivText = styled(Text)`
  font-weight: 200;
`
export const StyledMainPart = styled.div`
  @media screen and (min-width: 1440px) {
    width: 675px;
    text-align: left;
  }
`
export const StyledDiv = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`
export const StyledAdvantageList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const StyledAdvantage = styled.div`
  margin-top: ${responsiveSizing(5, 15, 320, 768)};
  @media screen and (min-width: 1440px) {
    margin-top: 15px;
  }
`
export const StyledButton = styled(Button)`
  margin-top: 50px;
`
