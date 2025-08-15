import Container from '@/components/ui/Container'
import { Section, StyledTitle, StyledButton } from './HeroSection.styled'
import Text from '@/components/ui/Text'

function HeroSection() {
  return (
    <Section id="hero">
      <Container>
        <Text type="green">Made with nature</Text>
        <StyledTitle type="h1">
          Welcome to the world of nature and organic.
        </StyledTitle>
        <StyledButton size={'default'} variant={'yellow'} arrow={true}>
          Explore Now
        </StyledButton>
      </Container>
    </Section>
  )
}

export default HeroSection
