import type { ChildrenProps } from '@/types'
import styled from '@emotion/styled'

const Div = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  @media (min-width: 1440px) {
    padding: 0 30px;
  }
  @media (min-width: 1440px) {
    padding: 0 260px;
  }
`

function Container({ children }: ChildrenProps) {
  return <Div>{children}</Div>
}

export default Container
