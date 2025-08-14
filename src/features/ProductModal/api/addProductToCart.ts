import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import { CartProductSchema } from '@/types'
import { array } from 'zod'
import { ok } from 'neverthrow'

export const addToCartApiSchema = array(CartProductSchema)

export async function addProductToCart(data: { quantity: number; id: number }) {
  try {
    const result = await api
      .post(`${ENDPOINTS.cart}`, {
        json: {
          products: [data],
        },
      })
      .json()
    const parseResult = addToCartApiSchema.parse(result)
    return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
