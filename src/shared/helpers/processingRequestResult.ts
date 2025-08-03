import type { RequestResponse } from '@/types'
import { showErrorToast } from './toasts/showErrorToast'

export function processingRequestResult<T>(
  data: RequestResponse<T>,
  defaultValue?: T
) {
  return data.match(
    (result) => result,
    (error) => {
      if (error.message !== 'canceled') {
        showErrorToast(error.message)
      }
      if (defaultValue) {
        return defaultValue
      }
    }
  )
}
