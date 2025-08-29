import { string } from 'zod'

export const FullNameSchema = string('')
  .min(4, 'min symbols 4')
  .max(50, 'max symbols 50')
  .refine((val) => val.trim().split(/\s+/).length === 2, {
    message: 'Name must contain two word: name and surname',
  })
