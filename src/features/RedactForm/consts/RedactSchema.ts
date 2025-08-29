import { z } from 'zod'

export const RedactSchema = z.object({
  first_name: z.string().min(1, 'Type your name').max(15, 'Maximum 15 symbols'),
  last_name: z
    .string()
    .min(1, 'Type your surname')
    .max(15, 'Maximum 15 symbols'),
  phone: z
    .string()
    .max(15, 'Maximum 15 numbers')
    .regex(/^\+?[0-9]+$/, 'Incorrect phone format'),
  address: z.string().min(1, 'Type your address'),
})

export type Redact = z.infer<typeof RedactSchema>
