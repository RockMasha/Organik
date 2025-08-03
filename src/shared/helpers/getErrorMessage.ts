import { errorMessages } from '../consts/errorMessages'

export function getErrorMessage(errorMessage?: string) {
  if (!errorMessage) {
    return errorMessages.default
  }

  switch (errorMessage) {
    case 'Unauthorized':
      return 'Not logined. Please, logging'
  }

  return errorMessage
}
