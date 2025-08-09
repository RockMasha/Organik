import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(100, 176)};
  padding-bottom: ${responsiveSizing(85, 200)};
`

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px 20px;
  margin-bottom: ${responsiveSizing(30, 50)};
`

export const ProductTitle = styled(Title)`
  margin-bottom: ${responsiveSizing(20, 40)};
  text-align: center;
`

export const ProductGreenText = styled(Text)`
  margin-bottom: ${responsiveSizing(2, 8)};
  text-align: center;
`
