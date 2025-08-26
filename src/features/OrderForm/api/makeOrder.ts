import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import {
  CartProductSchema,
  OrderSchema,
  UserSchema,
  type CartProduct,
} from '@/types'
import { getPostOrderProducts } from '../helpers/getPostOrderCart'
import { type OrderFormData } from '../consts/OrderFormSchema'
import { array, object } from 'zod'

const makeOrderApiSchema = object({
  ...OrderSchema,
  orderProducts: array(CartProductSchema),
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
    console.log('postData', postData)

    const result = await api
      .post(`${ENDPOINTS.order}`, {
        json: postData,
      })
      .json()
    console.log(result)

    const parseResult = makeOrderApiSchema.parse(result)
    // return ok(parseResult)
  } catch (error) {
    console.log('error', error)

    return handelNeverthrowError(error)
  }
}
