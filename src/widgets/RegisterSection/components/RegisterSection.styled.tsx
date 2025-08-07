import responsiveSizing from '@/styles/shared/resonsiceSizing'
import styled from '@emotion/styled'

export const SectionStyled = styled.section`
  padding: ${responsiveSizing(40, 80)};
`

export const StyledTitle = styled.h1`
  font-size: ${responsiveSizing(32, 56)};
  text-align: center;
  margin-bottom: 40px;
`
