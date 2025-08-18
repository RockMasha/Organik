import Container from '@/components/ui/Container'
import { AuthForm } from '@/features/AuthForm'
import { SectionStyled, TitleStyled } from './LoginSection.styled'

function LoginSection() {
  return (
    <SectionStyled>
      <Container>
        <TitleStyled type="h1" className="text-center">
          Welcome To Organick
        </TitleStyled>
        <AuthForm type="login" />
      </Container>
    </SectionStyled>
  )
}

export default LoginSection
