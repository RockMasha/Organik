import {
  Section,
  StyledTitle,
  StyledButton,
  StyledContainer,
} from './HeroSection.styled'
import Text from '@/components/ui/Text'

function HeroSection() {
  return (
    <Section id="hero">
      <StyledContainer>
        <Text type="green">Made with nature</Text>
        <StyledTitle type="h1">
          Welcome to the world of nature and organic.
        </StyledTitle>
        <StyledButton size={'flattened'} variant={'yellow'} arrow={true}>
          Explore Now
        </StyledButton>
      </StyledContainer>
    </Section>
  )
}

export default HeroSection
