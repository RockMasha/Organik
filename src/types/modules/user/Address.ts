import { string } from 'zod'

export const AddressSchema = string('')
  .min(3, 'min symbols 3')
  .max(100, 'max symbols 100')
