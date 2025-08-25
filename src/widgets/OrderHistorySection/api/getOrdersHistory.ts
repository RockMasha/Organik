import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import { OrderSchema } from '@/types'
import { ok } from 'neverthrow'
import { array } from 'zod'

const OrdersHistoryApiSchema = array(OrderSchema)

export async function getOrdersHistory() {
  try {
    const data = await api.get(ENDPOINTS.myOrders, {}).json()
    const parseResult = OrdersHistoryApiSchema.parse(data)
    return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
