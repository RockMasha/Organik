import { Section } from './NotFoundSection.styled'
import Title from '@/components/ui/Title'
import { StyledButton, StyledText, StyledTitle } from './NotFoundSection.styled'
import { Link } from 'react-router-dom'
function NotFoundSection() {
  return (
    <Section>
      <StyledTitle>404</StyledTitle>
      <Title type="h1">Page Not Found</Title>
      <StyledText type="normal">
        The page you are looking for doesn&apos;t exist or has been moved
      </StyledText>
      <StyledButton variant="blue" arrow={true} size="flattened">
        <Link to="/">Go To Home Page</Link>
      </StyledButton>
    </Section>
  )
}

export default NotFoundSection
