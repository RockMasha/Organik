import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import { CartSchema } from '@/types'
import { ok } from 'neverthrow'

export async function getProductInCart(id: number) {
  try {
    const result = await api.get(`${ENDPOINTS.cart}`).json()
    const parseResult = CartSchema.parse(result)
    const product = parseResult.products.find((item) => item.product.id === id)
    return ok(product ?? null)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
