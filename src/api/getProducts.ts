import api from './kyInstance'
import { handelError } from '@/shared/helpers/handelError'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { array, number, object } from 'zod'
import { ProductSchema } from '@/types'
import { ok } from 'neverthrow'

export const ProductsApiSchema = object({
  data: array(ProductSchema),
  total: number(),
})

interface GetProductsParams {
  page?: number
  limit?: number
  category?: string
}

export async function getProducts(params?: GetProductsParams) {
  try {
    const searchParams = params ? getSearchParams(params) : {}
    const data = await api.get(ENDPOINTS.products, { searchParams }).json()
    const parseResult = ProductsApiSchema.parse(data)
    return ok(parseResult)
  } catch (error) {
    return handelError(error)
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
  if (category !== undefined) {
    searchParams.append('category', String(category))
  }
  return searchParams
}
