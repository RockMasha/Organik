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
    justify-content: center;
    gap: 20px;
    text-align: right;
  }
`

export const StyledTitle = styled.h2`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
  color: var(--color-navy-100);
`

export const StyledContactLink = styled.a`
  display: block;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.36px;
  color: var(--color-gray-100);
  span {
    display: block;
    font-family: 'Open Sans';
    font-weight: 100;
  }
`

export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    gap: ${responsiveSizing(24, 40)};
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`

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
    border-left: 1px solid var(--color-gray-600);
    border-right: 1px solid var(--color-gray-600);
  }
`

export const StyledText = styled.p`
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 100;
  font-style: normal;
  letter-spacing: 0.36px;
  color: var(--color-navy-100);
  margin-top: ${responsiveSizing(20, 40)};
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`

export const StyledSocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: var(--color-gray-700);
`

// Icon styles
export const StyledInstlogo = styled(Instlogo)`
  width: 20px;
  height: 19px;
  path {
    fill: var(--color-navy-100);
  }
`

export const StyledFacelogo = styled(Facelogo)`
  width: 20px;
  height: 19px;
  path {
    fill: var(--color-navy-100);
  }
`

export const StyledPinterestlogo = styled(Pinterestlogo)`
  width: 20px;
  height: 19px;
  path {
    fill: var(--color-navy-100);
  }
`

export const StyledTwitterlogo = styled(Twitterlogo)`
  width: 20px;
  height: 19px;
  path {
    fill: var(--color-navy-100);
  }
`

export const StyledSocialList = styled.ul`
  display: flex;
  gap: ${responsiveSizing(10, 20)};
  margin-top: ${responsiveSizing(25, 35)};
  @media screen and (min-width: 1440px) {
    justify-content: center;
    margin-top: 60px;
  }
`

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
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 0.36px;
  color: var(--color-navy-100);
`

export const StyledPrivacyList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  padding-top: 21px;
  border-top: 1px solid var(--color-gray-600);
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
  text-align: center;
  font-family: 'Open Sans';
  font-size: 17px;
  color: var(--color-gray-100);
  span {
    font-weight: 600;
  }
`
