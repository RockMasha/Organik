import Container from '@/components/ui/Container'
import { RedactForm } from '@/features/RedactForm'
import { SectionStyled, TitleStyled } from './RedactProfileSecton.styled'

function RedactProfileSection() {
  return (
    <SectionStyled>
      <Container>
        <TitleStyled type="h1" className="text-center">
          Редагування профілю
        </TitleStyled>
        <RedactForm />
      </Container>
    </SectionStyled>
  )
}

export default RedactProfileSection
