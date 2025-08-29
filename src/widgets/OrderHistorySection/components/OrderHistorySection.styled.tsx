import PriceText from '@/components/ui/PriceText'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(80, 140)} 0;
`

export const OrderHistoryTitle = styled(Title)`
  text-align: center;
  margin-bottom: ${responsiveSizing(30, 40)} 0;
`

export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${responsiveSizing(20, 30)};
`

export const OrderItem = styled.li`
  padding: ${responsiveSizing(10, 30)};
  background-color: var(--color-white-200);
  border-radius: 15px;
`

export const ItemTitle = styled(Title)`
  margin-bottom: ${responsiveSizing(7, 25)};
`

export const ItemPrice = styled(PriceText)`
  margin-bottom: ${responsiveSizing(7, 15)};
`

export const ItemTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${responsiveSizing(26, 46)};
  margin-bottom: ${responsiveSizing(7, 15)};
`

export const ItemText = styled(Text)``

export const ItemDate = styled(Text)`
  color: var(--color-navy-100);
  text-align: end;
`
