import type { ElementType } from 'preact/compat'
import {
  StyledAdvantage,
  StyledDivText,
  StyledIcon,
  StyledAdvantageItem,
} from './AboutSection.styled'
import Title from '@/components/ui/Title'

interface AdvantageItemProps {
  title: string
  description: string
  Icon: ElementType
}

function AdvantageItem({ title, description, Icon }: AdvantageItemProps) {
  return (
    <StyledAdvantageItem>
      <StyledIcon>
        <Icon />
      </StyledIcon>
      <StyledAdvantage>
        <Title type="h3-thin">{title}</Title>
        <StyledDivText>{description}</StyledDivText>
      </StyledAdvantage>
    </StyledAdvantageItem>
  )
}

export default AdvantageItem
