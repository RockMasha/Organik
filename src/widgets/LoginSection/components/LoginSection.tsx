import Container from '@/components/ui/Container'
import Title from '@/components/ui/Title'
import { SwitchForm } from '@/features/SwitchForm'
import { SectionStyled } from '@/widgets/RegisterSection/components/RegisterSection.styled'

function LoginSection() {
  return (
    <SectionStyled>
      <Container>
        <Title type="h1" className="text-center">
          Welcome To Organick
        </Title>
        <SwitchForm formType="login" />
      </Container>
    </SectionStyled>
  )
}

export default LoginSection
