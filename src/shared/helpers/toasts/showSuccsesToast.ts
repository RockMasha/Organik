import { toast } from 'sonner'

export function showErrorToast(message = 'success') {
  toast.success(message)
}
