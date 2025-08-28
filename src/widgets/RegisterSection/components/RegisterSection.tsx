import Container from '@/components/ui/Container'
import { SectionStyled, TitleStyled } from './RegisterSection.styled'
import { AuthForm } from '@/features/AuthForm'

function RegisterSection() {
  return (
    <SectionStyled>
      <Container>
        <TitleStyled type="h1">Welcome To Organick</TitleStyled>
        <AuthForm type="register" />
      </Container>
    </SectionStyled>
  )
}

export default RegisterSection
