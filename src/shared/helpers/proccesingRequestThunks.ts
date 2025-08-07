// import { errorMessages } from '../consts/errorMessages'
// import { showErrorToast } from './toasts/showErrorToast'
// import { HTTPError } from 'ky'

export function processingRequestThunks(
  error: unknown,
  defaultValue?: unknown
) {
  console.error('❗ error:', error)

  // let errorMessage = 'default'

  // if (error instanceof HTTPError) {
  //   if (error.response.status === 400) {
  //     errorMessage = 'existedUser'
  //   }
  // }

  // const messageForToast = errorMessages[errorMessage] || errorMessages.default
  // showErrorToast(messageForToast)

  return defaultValue
}
