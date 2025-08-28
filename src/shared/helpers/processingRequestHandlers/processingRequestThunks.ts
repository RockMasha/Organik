import { showErrorToast } from '@/shared/helpers/toasts/showErrorToast'
import { type AppError } from '@/types'

export function processingRequestThunks<T>(data: T): T | void {
  const action = data as { payload?: Partial<AppError> }

  const maybeErrorMessage = action.payload?.message

  if (maybeErrorMessage && maybeErrorMessage !== 'canceled') {
    showErrorToast(maybeErrorMessage)
    return
  }

  return data
}
