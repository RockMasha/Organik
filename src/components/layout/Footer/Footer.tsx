import Container from '@/components/ui/Container'

import Logo from '@/components/modules/Logo/Logo'
import {
  StyledFooter,
  StyledTitle,
  StyledContactLink,
  StyledContactList,
  StyledGroup,
  StyledText,
  StyledPrivacyList,
  StyledPrivacyItem,
  StyledSocialLink,
  StyledSocialList,
  StyledUtilityList,
  StyledUtilityItem,
  StyledUtility,
  StyledOrganic,
} from './Footer.styled'
import TwitterLogo from '@/assets/icons/twitter.svg?react'
import InstagramLogo from '@/assets/icons/instagram.svg?react'
import FacebookLogo from '@/assets/icons/facebook.svg?react'
import PintrestLogo from '@/assets/icons/pinterest.svg?react'

function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <StyledGroup>
            <div>
              <StyledTitle>Contact Us</StyledTitle>
              <StyledContactList>
                <li>
                  <StyledContactLink href="mailto:needhelp@organick.com">
                    Email
                    <span>needhelp@organick.com</span>
                  </StyledContactLink>
                </li>
                <li>
                  <StyledContactLink href="tel:123(1254)1452">
                    Phone
                    <span>123 (1254) 1452</span>
                  </StyledContactLink>
                </li>
                <li>
                  <StyledContactLink href="map:88 Road, Brooklyn Street, USA">
                    Address
                    <span>88 Road, Brooklyn Street, USA</span>
                  </StyledContactLink>
                </li>
              </StyledContactList>
            </div>

            <StyledOrganic>
              <Logo />
              <StyledText>
                We are a popular and farming company aspiring to be a leader in
                the Organic food industry.
              </StyledText>
              <StyledSocialList>
                <li>
                  <StyledSocialLink href="#">
                    <FacebookLogo />
                  </StyledSocialLink>
                </li>
                <li>
                  <StyledSocialLink href="#">
                    <TwitterLogo />
                  </StyledSocialLink>
                </li>
                <li>
                  <StyledSocialLink href="#">
                    <InstagramLogo />
                  </StyledSocialLink>
                </li>
                <li>
                  <StyledSocialLink href="#">
                    <PintrestLogo />
                  </StyledSocialLink>
                </li>
              </StyledSocialList>
            </StyledOrganic>

            <StyledUtility>
              <StyledTitle>Utility Pages</StyledTitle>
              <StyledUtilityList>
                <StyledUtilityItem>Style Guide</StyledUtilityItem>
                <StyledUtilityItem>Protected</StyledUtilityItem>
                <StyledUtilityItem>Page Not Found</StyledUtilityItem>
                <StyledUtilityItem>Changelog</StyledUtilityItem>
                <StyledUtilityItem>Licenses</StyledUtilityItem>
              </StyledUtilityList>
            </StyledUtility>
          </StyledGroup>

          <StyledPrivacyList>
            <StyledPrivacyItem>Copyright © Organick |</StyledPrivacyItem>
            <StyledPrivacyItem>
              Designed by <span>VictorFlow</span>
            </StyledPrivacyItem>
            <StyledPrivacyItem>
              Powered by <span>Webflow</span>
            </StyledPrivacyItem>
          </StyledPrivacyList>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer
