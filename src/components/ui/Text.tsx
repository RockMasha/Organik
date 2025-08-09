import responsiveSizing from '@/styles/shared/resonsiceSizing'
import type { ChildrenProps } from '@/types'
import styled from '@emotion/styled'

const NormalText = styled.p`
  color: var(--color-gray-100);
  font-size: ${responsiveSizing(17, 18)};
`

const GreenText = styled.p`
  color: var(--color-green-200);
  font-size: ${responsiveSizing(26, 36)};
  font-family: Yellowtail;
`

interface TextProps extends ChildrenProps {
  type?: 'normal' | 'green'
  className?: string
}

function Text({ type, children, className }: TextProps) {
  switch (type) {
    case 'normal':
      return <NormalText className={className}>{children}</NormalText>
    case 'green':
      return <GreenText className={className}>{children}</GreenText>
    default:
      return <NormalText className={className}>{children}</NormalText>
  }
}

export default Text
