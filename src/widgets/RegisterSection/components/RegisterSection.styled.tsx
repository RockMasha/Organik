import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const SectionStyled = styled.section`
  padding: ${responsiveSizing(40, 160)} 0;
  background-color: var(--color-white-200);
`

export const TitleStyled = styled(Title)`
  margin-bottom: ${responsiveSizing(20, 40)};
  text-align: center;
`
