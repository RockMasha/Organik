import styled from '@emotion/styled'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
import Twitterlogo from '@/assets/icons/twitter.svg?react'
import Instlogo from '@/assets/icons/instagram.svg?react'
import Facelogo from '@/assets/icons/facebook.svg?react'
import Pinterestlogo from '@/assets/icons/pinterest.svg?react'
export const StyledFooter = styled.footer`
  padding-top: ${responsiveSizing(70, 80)};
  padding-bottom: 28px;
`
export const StyledGroup = styled.div`
  text-align: left;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
    text-align: right;
  }
`
//contact us

export const StyledTitle = styled.h2`
  color: #274c5b;
  font-family: 'Roboto';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`
export const StyledContactLink = styled.a`
  color: #525c60;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  display: block;
  letter-spacing: 0.36px;
  span {
    font-family: 'Open Sans';
    font-weight: 100;
    display: block;
  }
`
export const StyledContactList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: ${responsiveSizing(24, 40)};
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`
//Organic + social

export const StyledOrganic = styled.div`
  margin-top: 60px;
  padding-right: 20px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 0;
    padding: 0 66px 0;
    border-right: 1px solid #d5d5d5;
    border-left: 1px solid #d5d5d5;
  }
`

export const StyledText = styled.p`
  color: #525c60;
  font-family: 'Open Sans';
  font-size: 17px;
  font-style: normal;
  font-weight: 100;
  letter-spacing: 0.36px;
  margin-top: ${responsiveSizing(20, 40)};
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`
export const StyledSocialLink = styled.a`
  border-radius: 100px;
  background: #eff6f1;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledInstlogo = styled(Instlogo)`
  width: 20px;
  height: 19px;
  path {
    fill: #274c5b;
  }
`
export const StyledFacelogo = styled(Facelogo)`
  width: 20px;
  height: 19px;
  path {
    fill: #274c5b;
  }
`
export const StyledPinterestlogo = styled(Pinterestlogo)`
  width: 20px;
  height: 19px;
  path {
    fill: #274c5b;
  }
`
export const StyledTwitterlogo = styled(Twitterlogo)`
  width: 20px;
  height: 19px;
  path {
    fill: #274c5b;
  }
`
export const StyledSocialList = styled.ul`
  margin-top: ${responsiveSizing(25, 35)};
  display: flex;
  gap: ${responsiveSizing(10, 20)};
  @media screen and (min-width: 1440px) {
    justify-content: center;
    margin-top: 60px;
  }
`

//utility pages
export const StyledUtility = styled.div`
  margin-top: 56px;
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    text-align: left;
  }
`
export const StyledUtilityList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: ${responsiveSizing(10, 20)};
`
export const StyledUtilityItem = styled.li`
  color: #525c60;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  letter-spacing: 0.36px;
`

//privacy
export const StyledPrivacyList = styled.ul`
  margin-top: 40px;
  padding-top: 21px;
  border-top: 1px solid #d5d5d5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5px;
    margin-top: ${responsiveSizing(40, 100)};
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`
export const StyledPrivacyItem = styled.li`
  color: #525c60;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  span {
    font-weight: 600;
  }
`
