import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Picture from '@/components/ui/Picture'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const StyledSection = styled.section`
  padding: 30px 0;
  background-color: var(--color-navy-100);
`

export const StyledTitle = styled(Title)`
  color: var(--color-white-100);
  font-size: ${responsiveSizing(28, 50)};
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.36px;
`

export const StyledText = styled.p`
  color: var(--color-green-200);
  font-family: Yellowtail;
  font-size: ${responsiveSizing(26, 36)};
  line-height: 1.8;
  letter-spacing: 0.36px;
`

export const StyledButton = styled(Button)`
  width: ${responsiveSizing(246, 270)};
  height: ${responsiveSizing(70, 82)};
  margin: 50px 0 30px 0;
  border: 1px solid var(--color-yellow-100);
  background: var(--color-yellow-100);
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(18, 20)};
  font-weight: 700;
`

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px 20px;
  margin-bottom: ${responsiveSizing(30, 50)};
`

export const ProductGreenText = styled(Text)`
  margin-bottom: ${responsiveSizing(2, 8)};
  text-align: center;
`

export const ProductItem = styled.li`
  padding: 0 ${responsiveSizing(6, 12)};
  padding-top: ${responsiveSizing(20, 30)};
  padding-bottom: ${responsiveSizing(10, 17)};
  background-color: var(--color-white-200);
  border-radius: 30px;
`

export const ProductBadge = styled(Badge)`
  margin-left: ${responsiveSizing(14, 18)};
  margin-bottom: 20px;
`

export const ProductImg = styled(Picture)`
  width: ${responsiveSizing(250, 310)};
  height: ${responsiveSizing(250, 310)};
  border-radius: 30px;
`

export const ProductTitle = styled(Title)`
  margin: 0 ${responsiveSizing(14, 18)};
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--color-gray-600);
`

export const ProductValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${responsiveSizing(14, 18)};
`

export const ProductPriceBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`
