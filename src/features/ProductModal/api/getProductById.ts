import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelError } from '@/shared/helpers/handelError'
import { ProductSchema } from '@/types'
import { ok } from 'neverthrow'

export async function getProductById(id: string) {
  try {
    const data = await api.get(`${ENDPOINTS.products}/${id}`).json()
    const parseResult = ProductSchema.parse(data)
    return ok(parseResult)
  } catch (error) {
    return handelError(error)
  }
}
