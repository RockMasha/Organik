import Title from '@/components/ui/Title'
import { Section } from './CartPreviewSection.styled'
import Picture from '@/components/ui/Picture'

function CartPreviewSection() {
  return (
    <Section>
      <Picture className="w-full" name="cart" />
      <Title className="absolute" type="h1">
        Cart
      </Title>
    </Section>
  )
}

export default CartPreviewSection
