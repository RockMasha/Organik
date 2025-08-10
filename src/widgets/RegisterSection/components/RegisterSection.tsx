import Container from '@/components/ui/Container'
import { SectionStyled } from './RegisterSection.styled'
import { SwitchForm } from '@/features/SwitchForm'
import Title from '@/components/ui/Title'
import { registerUser } from '@/features/SwitchForm/api/registerUser'

function RegisterSection() {
  return (
    <SectionStyled>
      <Container>
        <Title type="h1" className="text-center">
          Welcome To Organick
        </Title>
        <SwitchForm functionType={registerUser} buttonText="Зареєструватися" />
      </Container>
    </SectionStyled>
  )
}

export default RegisterSection
