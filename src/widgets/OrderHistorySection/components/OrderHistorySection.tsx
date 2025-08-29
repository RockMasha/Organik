import {
  OrderHistoryTitle,
  OrderList,
  Section,
} from './OrderHistorySection.styled'
import Container from '@/components/ui/Container'
import { useEffect, useState } from 'react'
import { getOrdersHistory } from '../api/getOrdersHistory'
import type { Order } from '@/types'
import { processingRequestResult } from '@/shared/helpers/processingRequestHandlers/processingRequestResult'
import HistoryOrderItemSkeleton from './HistoryOrderItemSkeleton'
import HistoryOrderItem from './HistoryOrderItem'
import NoOrders from '@/components/modules/NoOrders/NoOrders'

function OrderHistorySection() {
  const [orders, setOrders] = useState<Order[] | null>(null)

  useEffect(() => {
    const setOrdersData = async () => {
      const answer = await getOrdersHistory()
      const result = processingRequestResult(answer)
      setOrders(result ?? [])
    }
    setOrdersData()
  })

  return (
    <Section>
      <Container>
        <OrderHistoryTitle type="h1">Orders History</OrderHistoryTitle>
        <OrderList>
          {orders === null &&
            new Array(3)
              .fill(0)
              .map((_, index) => <HistoryOrderItemSkeleton key={index} />)}

          {orders &&
            orders.length > 0 &&
            orders
              .reverse()
              .map((data) => <HistoryOrderItem data={data} key={data.id} />)}

          {orders?.length === 0 && <NoOrders title={'No made orders now'} />}
        </OrderList>
      </Container>
    </Section>
  )
}

export default OrderHistorySection
