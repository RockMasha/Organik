import type { RequestResponse } from '@/types'
import { showErrorToast } from '@/shared/helpers/toasts/showErrorToast'

export function processingRequestResult<T>(
  data: RequestResponse<T>,
  defaultValue?: T,
  showToast: boolean = true
) {
  return data.match(
    (result) => result,
    (error) => {
      if (error.message !== 'canceled' && showToast) {
        showErrorToast(error.message)
      }
      if (defaultValue) {
        return defaultValue
      }
    }
  )
}
