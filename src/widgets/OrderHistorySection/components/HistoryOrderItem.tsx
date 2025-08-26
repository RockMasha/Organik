import type { Order } from '@/types'
import {
  ItemDate,
  ItemPrice,
  ItemText,
  ItemTextBox,
  ItemTitle,
  OrderItem,
} from './OrderHistorySection.styled'
import { getStringDate } from '@/shared/helpers/getStringDate'

function HistoryOrderItem({ data }: { data: Order }) {
  const { id, full_name, email, phone, address, createdAt } = data

  return (
    <OrderItem>
      <ItemTitle type="h3-weight">#{id}</ItemTitle>
      <ItemPrice minWidth={18} maxWidth={23}>
        Price: 23$
      </ItemPrice>
      <ItemTextBox>
        <ItemText>{full_name}</ItemText>
        <ItemText>{email}</ItemText>
        <ItemText>{phone}</ItemText>
        <ItemText>{address}</ItemText>
      </ItemTextBox>
      <ItemDate>{getStringDate(createdAt)}</ItemDate>
    </OrderItem>
  )
}

export default HistoryOrderItem
