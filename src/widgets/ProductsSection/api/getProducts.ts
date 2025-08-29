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

interface GetProductsParams {
  page?: number
  limit?: number
  category?: string
}

let controller: AbortController | null = null
export async function getProducts(params?: GetProductsParams) {
  if (controller) {
    controller.abort()
  }
  controller = new AbortController()
  try {
    const searchParams = params ? getSearchParams(params) : {}
    const data = await api
      .get(ENDPOINTS.products, { searchParams, signal: controller.signal })
      .json()
    const parseResult = ProductsApiSchema.parse(data)
    return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}

function getSearchParams({ page, limit, category }: GetProductsParams) {
  const searchParams = new URLSearchParams()
  if (page !== undefined) {
    searchParams.append('page', String(page))
  }
  if (limit !== undefined) {
    searchParams.append('limit', String(limit))
  }
  if (category !== undefined && category !== '') {
    searchParams.append('category', String(category))
  }
  return searchParams
}
