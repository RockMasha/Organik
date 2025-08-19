import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import type { CartProduct } from '@/types'

// const makeOrderApiSchema =

interface OrderData {
  full_name: string
  //   email: `${string}@${string}.${string}`
  email: string
  //   phone: `+380${number}`
  phone: string
  address: string
  message?: string
  orderProducts: CartProduct[]
}

export async function makeOrder(data: OrderData) {
  try {
    const result = await api.post(`${ENDPOINTS.order}`, { json: data }).json()
    console.log(result)

    // const parseResult = CartSchema.parse(result)
    // return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
