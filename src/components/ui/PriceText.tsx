import responsiveSizing from '@/styles/shared/resonsiceSizing'
import type { ChildrenProps } from '@/types'
import styled from '@emotion/styled'

interface PriceTextSize {
  minWidth: number
  maxWidth: number
}

const PriceTextStyled = styled.p<PriceTextSize>`
  font-family: 'Open Sans';
  font-size: ${({ minWidth, maxWidth }) =>
    responsiveSizing(minWidth, maxWidth)};
`

const PriceNormalText = styled(PriceTextStyled)`
  font-weight: 700;
  color: var(--color-navy-100);
`

const PriceCrossedText = styled(PriceTextStyled)`
  font-weight: 600;
  color: var(--color-gray-300);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
`

interface TextProps extends ChildrenProps, PriceTextSize {
  type?: 'normal' | 'crossed'
  className?: string
}

function PriceText({
  type,
  children,
  minWidth,
  maxWidth,
  className,
}: TextProps) {
  const props = { minWidth, maxWidth, className }
  switch (type) {
    case 'normal':
      return <PriceNormalText {...props}>{children}</PriceNormalText>
    case 'crossed':
      return <PriceCrossedText {...props}>{children}</PriceCrossedText>
    default:
      return <PriceNormalText {...props}>{children}</PriceNormalText>
  }
}

export default PriceText
