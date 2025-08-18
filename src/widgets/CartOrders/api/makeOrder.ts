import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'

export async function makeOrder() {
  try {
    const result = await api.get(`${ENDPOINTS.order}`).json()
    console.log(result)

    // const parseResult = CartSchema.parse(result)
    // return ok(parseResult)
  } catch (error) {
    return handelNeverthrowError(error)
  }
}
