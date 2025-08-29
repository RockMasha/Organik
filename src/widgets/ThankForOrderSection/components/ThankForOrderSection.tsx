import {
  Section,
  StyledPicture,
  StyledTitle,
} from './ThankForOrderSection.styled'

function ThankForOrderSection() {
  return (
    <Section>
      <StyledTitle type="h1">Thank you for your order</StyledTitle>
      <StyledPicture name="thank-for-order" lazy={false} />
    </Section>
  )
}

export default ThankForOrderSection
