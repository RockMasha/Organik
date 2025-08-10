import Container from '@/components/ui/Container'
import { SectionStyled } from './RegisterSection.styled'
import Title from '@/components/ui/Title'
import { AuthForm } from '@/features/AuthForm'

function RegisterSection() {
  return (
    <SectionStyled>
      <Container>
        <Title type="h1" className="text-center">
          Welcome To Organick
        </Title>
        <AuthForm type="register" />
      </Container>
    </SectionStyled>
  )
}

export default RegisterSection
