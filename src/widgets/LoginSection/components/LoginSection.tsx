import Container from '@/components/ui/Container'
import { SwitchForm } from '@/features/SwitchForm'
import {
  SectionStyled,
  StyledTitle,
} from '@/widgets/RegisterSection/components/RegisterSection.styled'

function LoginSection() {
  return (
    <SectionStyled>
      <Container>
        <StyledTitle>Welcome To Organick</StyledTitle>
        <SwitchForm formType="login" />
      </Container>
    </SectionStyled>
  )
}

export default LoginSection
