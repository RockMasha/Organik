import { Badge } from '@/components/ui/badge'
import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

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

export const ProductImg = styled.img`
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
