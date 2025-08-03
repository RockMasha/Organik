import api from './kyInstance'
import { ok } from 'neverthrow'
import { handelError } from '@/shared/helpers/handelError'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { array } from 'zod'
import { CategorySchema } from '@/types'

export const CategoryApiSchema = array(CategorySchema)

export async function getCategories() {
  try {
    const data = await api.get(ENDPOINTS.categories).json()
    const parseResult = CategoryApiSchema.safeParse(data)
    if (parseResult.success) {
      return ok(parseResult.data)
    } else {
      return ok([])
    }
  } catch (error) {
    return handelError(error)
  }
}
