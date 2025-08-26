import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { array, number, object } from 'zod'
import { ProductSchema } from '@/types'
import { ok } from 'neverthrow'
import api from '@/api/kyInstance'

export const ProductsApiSchema = object({
  data: array(ProductSchema),
  total: number(),
})

export async function getVegetables() {
  try {
    const searchParams = new URLSearchParams()
    searchParams.append('limit', '4')
    searchParams.append('category', 'Vegetable')
    const data = await api.get(ENDPOINTS.products, { searchParams }).json()
    const parseResult = ProductsApiSchema.parse(data)
    return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
