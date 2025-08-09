import Container from '@/components/ui/Container'
import { SectionStyled } from './RegisterSection.styled'
import { SwitchForm } from '@/features/SwitchForm'
import Title from '@/components/ui/Title'

function RegisterSection() {
  return (
    <SectionStyled>
      <Container>
        <Title type="h1" className="text-center">
          Welcome To Organick
        </Title>
        <SwitchForm formType="registration" />
      </Container>
    </SectionStyled>
  )
}

export default RegisterSection
