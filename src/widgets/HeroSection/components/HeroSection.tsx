import Container from '@/components/ui/Container'
import { Section, StyledButton, StyledTitle } from './HeroSection.styled'
import Text from '@/components/ui/Text'
import { getSectionId } from '@/shared/helpers/getSectionId'

function HeroSection() {
  return (
    <Section id={getSectionId('hero')}>
      <Container>
        <Text type="green">Made with nature</Text>
        <StyledTitle type="h1">
          Welcome to the world of nature and organic.
        </StyledTitle>
        <StyledButton
          link="home"
          size={'default'}
          variant={'yellow'}
          arrow={true}
        >
          Explore Now
        </StyledButton>
      </Container>
    </Section>
  )
}

export default HeroSection
