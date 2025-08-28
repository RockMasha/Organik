import { string } from 'zod'

export const FirstNameSchema = string()
  .min(1, 'Type your name')
  .max(15, 'Maximum 15 symbols')
