import Container from '@/components/ui/Container'
import {
  PictureBackground,
  Section,
  StyledDecoratText,
  StyledList,
  StyledListText,
  StyledListTitle,
  StyledTitle,
  StyledWrapper,
} from './EcoFriendlySection.styled'

function EcoFriendlySection() {
  return (
    <Section id="ecoFriendly" className="relative">
      <PictureBackground />
      <Container>
        <StyledWrapper>
          <StyledDecoratText>Eco Friendly</StyledDecoratText>
          <StyledTitle type="h2">From Our Farm To Your Home.</StyledTitle>
          <StyledList>
            <li>
              <StyledListTitle type="h3-thin">
                Choose Your Products
              </StyledListTitle>
              <StyledListText>
                In our listing, we have several collections of organic products.
                This is the place where you need to choose the product you want.
              </StyledListText>
            </li>
            <li>
              <StyledListTitle type="h3-thin">
                Farmers will produce it
              </StyledListTitle>
              <StyledListText>
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </StyledListText>
            </li>
            <li>
              <StyledListTitle type="h3-thin">
                We Can Delivery too
              </StyledListTitle>
              <StyledListText>
                If you are not comfortable going to the nearby market place we
                also will deliver your product to your doorstep.
              </StyledListText>
            </li>
          </StyledList>
        </StyledWrapper>
      </Container>
    </Section>
  )
}

export default EcoFriendlySection
