import responsiveSizing from '@/styles/helpers/responsiveSizing'
import type { ChildrenProps } from '@/types'
import styled from '@emotion/styled'

const H1 = styled.h1`
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(36, 70)};
  font-weight: 800;
`

const H2 = styled.h2`
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(28, 50)};
  font-weight: 800;
`

const H3 = styled.h3`
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(24, 25)};
`

const ThinH3 = styled(H3)`
  font-weight: 600;
`

const WeightH3 = styled(H3)`
  font-weight: 800;
`

const H4 = styled.h4`
  color: var(--color-navy-100);
  font-size: 19px;
  font-weight: 600;
`

interface TitleProps extends ChildrenProps {
  type: 'h1' | 'h2' | 'h3-thin' | 'h3-weight' | 'h4'
  className?: string
}

function Title({ type, children, className }: TitleProps) {
  switch (type) {
    case 'h1':
      return <H1 className={className}>{children}</H1>
    case 'h2':
      return <H2 className={className}>{children}</H2>
    case 'h3-thin':
      return <ThinH3 className={className}>{children}</ThinH3>
    case 'h3-weight':
      return <WeightH3 className={className}>{children}</WeightH3>
    case 'h4':
      return <H4 className={className}>{children}</H4>
  }
}

export default Title
