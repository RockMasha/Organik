import responsiveSizing from '@/styles/helpers/responsiveSizing'
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

const ErrorText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  color: var(--color-red-100);
  font-size: ${responsiveSizing(12, 18)};
`

interface TextProps extends ChildrenProps {
  type?: 'normal' | 'green' | 'error'
  className?: string
}

function Text({ type, children, className }: TextProps) {
  switch (type) {
    case 'normal':
      return <NormalText className={className}>{children}</NormalText>
    case 'green':
      return <GreenText className={className}>{children}</GreenText>
    case 'error':
      return <ErrorText className={className}>{children}</ErrorText>
    default:
      return <NormalText className={className}>{children}</NormalText>
  }
}

export default Text
