import Container from '@/components/ui/Container'
import Title from '@/components/ui/Title'
import { RedactForm } from '@/features/RedactForm'
import { SectionStyled } from './RedactProfileSecton.styled'

function RedactProfileSection() {
  return (
    <SectionStyled>
      <Container>
        <Title type="h1" className="text-center">
          Redact profile
        </Title>
        <RedactForm></RedactForm>
      </Container>
    </SectionStyled>
  )
}

export default RedactProfileSection
