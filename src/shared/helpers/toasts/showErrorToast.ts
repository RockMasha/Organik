import { errorMessages } from '@/shared/consts/errorMessages'
import { toast } from 'sonner'

export function showErrorToast(message = errorMessages.default) {
  console.log('in showErrorToast')

  toast.error(message)
}
