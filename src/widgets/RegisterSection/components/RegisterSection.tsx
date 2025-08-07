import Container from '@/components/ui/Container'
import { SectionStyled, StyledTitle } from './RegisterSection.styled'
import { RegisterForm } from '@/features/RegisterForm'

function RegisterSection() {
  return (
    <SectionStyled>
      <Container>
        <StyledTitle>Welcome To Organick</StyledTitle>
        <RegisterForm />
      </Container>
    </SectionStyled>
  )
}

export default RegisterSection
