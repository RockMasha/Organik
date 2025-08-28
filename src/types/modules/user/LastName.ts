import { string } from 'zod'

export const LastNameSchema = string()
  .min(1, 'Type your surname')
  .max(15, 'Maximum 15 symbols')
