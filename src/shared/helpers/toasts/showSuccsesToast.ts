import { toast } from 'sonner'

export function showSuccessToast(message = 'success') {
  toast.success(message)
}
