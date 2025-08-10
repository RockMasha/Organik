import { HTTPError } from 'ky'
import { getErrorMessage } from './getErrorMessage'
import { errorMessages } from '../consts/errorMessages'

export async function handelAppError(error: unknown) {
  if (error instanceof HTTPError) {
    const errorData = await error.response.json()

    return { message: getErrorMessage(errorData.message) }
  }
  return { message: errorMessages.unexpected }
}
