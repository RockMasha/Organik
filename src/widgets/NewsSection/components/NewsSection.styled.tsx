import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Picture from '@/components/ui/Picture'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import { getImageBackground } from '@/styles/helpers/getImageBackground'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(60, 160, 320, 1440)};
  padding-bottom: ${responsiveSizing(30, 50)};
`

export const StyledTitle = styled(Title)`
  margin-bottom: 46px;
  @media (min-width: 1440px) {
    margin: 0;
  }
`

export const TitleWrapper = styled.div`
  padding-bottom: 10px;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-bottom: ${responsiveSizing(46, 70)};
  }

  & > div {
    @media (min-width: 1440px) {
      width: 692px;
    }
  }

  & > Button {
    @media (min-width: 1440px) {
      height: 82px;
      margin: 0;
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${responsiveSizing(20, 46)};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const InfoWrapper = styled.div`
  @media (min-width: 1440px) {
    position: absolute;
    top: ${responsiveSizing(250, 290, 1440, 1920)};
    left: 30px;
    width: 620px;
    padding: 50px 57px;
    border-radius: 31px 34px 30px 30px;
    box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
    background-color: var(--color-white-100);
  }

  @media (min-width: 1920px) {
    left: calc(50% - 310px);
    top: 50%;
  }
`

export const StyledItem = styled.li`
  border-radius: 45px;
  background-color: var(--color-white-100);
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.14);
  @media (min-width: 1440px) {
    position: relative;
  }
`

export const ListPicture = styled(Picture)`
  width: 100%;
  border-radius: 40px 40px 0 0;

  img {
    width: 100%;
    border-radius: 40px 40px 0 0;
  }

  @media (min-width: 1440px) {
    border-radius: 48px;

    img {
      border-radius: 48px;
    }
  }
`

export const ItemTitleDescription = styled(Text)`
  color: var(--color-navy-100);
  line-height: 1.3;
`

export const WrapperForDate = styled(Badge)`
  position: absolute;
  left: 13px;
  top: 12px;
  padding: 10px 20px;
  font-size: 19px;
  font-weight: 700;
  border: none;
  border-radius: 15px;

  @media (min-width: 768px) {
    left: ${responsiveSizing(13, 34, 768, 1920)};
    top: ${responsiveSizing(12, 31, 768, 1920)};
    padding: 16px 28px;
    font-size: 25px;
    border-radius: 100px;
  }
`

export const ItemTitle = styled(Title)`
  font-size: ${responsiveSizing(18, 24, 320, 1440)};
`

export const ItemText = styled(Text)`
  color: var(--color-gray-100);
  font-family: 'Open Sans';
  line-height: 1.8;
`

export const FormTitle = styled(Title)`
  margin-bottom: 20px;
  color: var(--color-white-100);
  text-align: center;
  font-size: ${responsiveSizing(33, 50, 320, 1920)};
  line-height: 1.2;
  @media (min-width: 768px) {
    width: 323px;
    margin: 0 auto 20px auto;
  }
  @media (min-width: 1440px) {
    margin: 0;
    text-align: left;
  }
`

export const FormBackground = styled.div`
  margin-top: 140px;
  padding: 65px 20px;
  ${getImageBackground('blue_lemons')}
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  @media (min-width: 320px) {
    padding-top: ${responsiveSizing(65, 100, 320, 1920)};
    padding-bottom: ${responsiveSizing(65, 100, 320, 1920)};
    padding-left: ${responsiveSizing(20, 70, 320, 1920)};
    padding-right: ${responsiveSizing(20, 70, 320, 1920)};
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-top: 230px;
  }
`

export const StyledInput = styled(Input)`
  height: 80px;
  text-align: center;
  border: 1px solid var(--color-gray-400);
  @media (min-width: 1440px) {
    width: 350px;
    height: 82px;
  }
`

export const FormButton = styled(Button)`
  width: 100%;
  height: 71px;
  margin-top: 10px;
  border-radius: 16px;
  @media (min-width: 1440px) {
    width: 200px;
    height: 82px;
    margin-left: 10px;
  }
`
