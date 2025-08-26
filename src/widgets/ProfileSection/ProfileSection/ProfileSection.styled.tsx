import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding: ${responsiveSizing(40, 80)};
  background-color: var(--color-white-200);
`
export const TitleStyled = styled(Title)`
  margin-bottom: ${responsiveSizing(20, 40)};
`
