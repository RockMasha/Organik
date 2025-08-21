import Container from '@/components/ui/Container'
import {
  PictureBackground,
  Section,
  StyledList,
  StyledListTitle,
  StyledTitle,
  StyledWrapper,
} from './EcoFriendlySection.styled'
import Text from '@/components/ui/Text'

function EcoFriendlySection() {
  return (
    <Section id="ecoFriendly" className="relative">
      <PictureBackground />
      <Container>
        <StyledWrapper>
          <Text type="green" className="mt-[40px]">
            Eco Friendly
          </Text>
          <StyledTitle type="h2">From Our Farm To Your Home.</StyledTitle>
          <StyledList>
            <li>
              <StyledListTitle type="h3-thin">
                Choose Your Products
              </StyledListTitle>
              <Text>
                In our listing, we have several collections of organic products.
                This is the place where you need to choose the product you want.
              </Text>
            </li>
            <li>
              <StyledListTitle type="h3-thin">
                Farmers will produce it
              </StyledListTitle>
              <Text>
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </Text>
            </li>
            <li>
              <StyledListTitle type="h3-thin">
                We Can Delivery too
              </StyledListTitle>
              <Text>
                If you are not comfortable going to the nearby market place we
                also will deliver your product to your doorstep.
              </Text>
            </li>
          </StyledList>
        </StyledWrapper>
      </Container>
    </Section>
  )
}

export default EcoFriendlySection
