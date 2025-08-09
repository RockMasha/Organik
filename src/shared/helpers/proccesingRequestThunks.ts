import { showErrorToast } from './toasts/showErrorToast'
import { type AppError } from '@/types'

export function processingRequestThunks<T>(data: T): T | void {
  const candidate = data as Partial<AppError>

  const maybeErrorMessage = candidate?.message
  if (maybeErrorMessage) {
    showErrorToast(maybeErrorMessage)
    return
  }

  return data
}
