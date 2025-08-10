import { Section, StyledTitle, StyledButton } from './HeroSection.styled'
import Text from '@/components/ui/Text'

function HeroSection() {
  return (
    <Section id="hero">
      <Text type="green">Made with nature</Text>
      <StyledTitle type="h1">
        Welcome to the world of nature and organic.
      </StyledTitle>
      <StyledButton size={'flattened'} variant={'yellow'} arrow={true}>
        Explore Now
      </StyledButton>
    </Section>
  )
}

export default HeroSection
