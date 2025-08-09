import { errorMessages } from '../consts/errorMessages'

export function getErrorMessage(errorMessage?: string) {
  if (!errorMessage) {
    return errorMessages.default
  }

  console.log('errorMessage: ', errorMessage)

  switch (errorMessage) {
    case 'Rejected':
      return errorMessages.existedUser
    case 'Unexpected':
      return errorMessages.unexpected
    default:
      return errorMessage
  }
}
