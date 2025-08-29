import Title from '@/components/ui/Title'
import { Section } from './PreviewSection.styled'
import Picture from '@/components/ui/Picture'
import type { Image } from '@/types'

interface PreviewSectionProps {
  image: Image
  title: string
}

function PreviewSection({ image, title }: PreviewSectionProps) {
  return (
    <Section>
      <Picture className="w-full" name={image} />
      <Title className="absolute" type="h1">
        {title}
      </Title>
    </Section>
  )
}

export default PreviewSection
