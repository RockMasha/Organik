import { defaultErrorMessage } from '@/shared/consts/errorMessages'
import { toast } from 'sonner'

export function showErrorToast(message = defaultErrorMessage) {
  toast.error(message)
}
