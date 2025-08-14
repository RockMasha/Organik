import { HTTPError } from 'ky'
import { Err, err } from 'neverthrow'
import { getErrorMessage } from './getErrorMessage'
import { errorMessages } from '@/shared/consts/errorMessages'
import type { AppError } from '@/types'

export async function handelNeverthrowError(
  error: unknown
): Promise<Err<never, AppError>> {
  if (error instanceof HTTPError) {
    const errorData = await error.response.json()
    return err(new Error(getErrorMessage(errorData.message)))
  }

  const errorWithMessage = error as Partial<AppError>
  if (errorWithMessage?.message) {
    return err(new Error(getErrorMessage(errorWithMessage.message)))
  }

  return err({ message: errorMessages.unexpected })
}
