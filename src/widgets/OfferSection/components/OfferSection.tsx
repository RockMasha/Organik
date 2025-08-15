import Container from '@/components/ui/Container'
import {
  ItemNatural,
  ItemOffer,
  List,
  Section,
  StyledText,
  StyledTitle,
} from './OfferSection.styled'

function OfferSection() {
  return (
    <Section id="offer">
      <Container>
        <List>
          <ItemNatural>
            <StyledText color="var(--color-white-100)">Natural!!</StyledText>
            <StyledTitle color="var(--color-white-100)">
              <span>Get Garden</span>
              <span>Fresh Fruits</span>
            </StyledTitle>
          </ItemNatural>
          <ItemOffer>
            <StyledText color="var(--color-green-200)">Offer!!</StyledText>
            <StyledTitle color="var(--color-navy-100)">
              <span>Get 10% off</span>
              <span>on Vegetables</span>
            </StyledTitle>
          </ItemOffer>
        </List>
      </Container>
    </Section>
  )
}

export default OfferSection
