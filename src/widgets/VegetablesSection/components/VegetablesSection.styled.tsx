import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(50, 200)};
  padding-bottom: ${responsiveSizing(50, 200)};
  background-color: var(--color-navy-100);
`

export const VegetablesSignature = styled(Text)`
  margin-bottom: ${responsiveSizing(4, 8)};
`

export const VegetablesTitle = styled(Title)`
  color: var(--color-white-100);
  margin-bottom: ${responsiveSizing(20, 50)};
`

export const VegetablesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`
