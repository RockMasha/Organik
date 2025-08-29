import { errorMessages } from '@/shared/consts/errorMessages'
import { toast } from 'sonner'

export function showErrorToast(message = errorMessages.default) {
  toast.error(message)
}
