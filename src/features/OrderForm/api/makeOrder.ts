import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import { OrderSchema, UserSchema, type CartProduct } from '@/types'
import { getPostOrderProducts } from '../helpers/getPostOrderCart'
import { type OrderFormData } from '../consts/OrderFormSchema'
import { ok } from 'neverthrow'

const makeOrderApiSchema = OrderSchema.extend({
  // orderProducts: array(CartProductSchema),
  user: UserSchema,
})

interface OrderData extends OrderFormData {
  orderProducts: CartProduct[]
}

export async function makeOrder(data: OrderData) {
  try {
    const postData = {
      ...data,
      orderProducts: getPostOrderProducts(data.orderProducts),
    }
    delete postData.message

    const result = await api
      .post(`${ENDPOINTS.order}`, {
        json: postData,
      })
      .json()
    const parseResult = makeOrderApiSchema.parse(result)
    return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
