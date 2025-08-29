import { Section } from './NotFoundSection.styled'
import Title from '@/components/ui/Title'
import { StyledButton, StyledText, StyledTitle } from './NotFoundSection.styled'

function NotFoundSection() {
  return (
    <Section>
      <StyledTitle>404</StyledTitle>
      <Title type="h1">Page Not Found</Title>
      <StyledText type="normal">
        The page you are looking for doesn&apos;t exist or has been moved
      </StyledText>
      <StyledButton link="home" variant="blue" arrow={true} size="flattened">
        Go To Home Page
      </StyledButton>
    </Section>
  )
}

export default NotFoundSection
