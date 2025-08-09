import { showErrorToast } from './toasts/showErrorToast'
import type { RequestResponse } from '@/types'
import { getErrorMessage } from './getErrorMessage'
export function processingRequestThunks<T>(data: T) {
  if (data?.error?.message) {
    const errorText = getErrorMessage(data.error.message)
    showErrorToast(errorText)
    return
  }

  return data
}
