import { z } from 'zod'

export const RedactSchema = z.object({
  first_name: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, 'Type your name')
    .refine((val) => !val || val.length <= 15, 'Maximum 15 symbols'),
  last_name: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, 'Type your name')
    .refine((val) => !val || val.length <= 15, 'Maximum 15 symbols'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(\+380|380)\d{9}$/.test(val),
      'phone format must be "+380XXXXXXXXX" or "380XXXXXXXXX"'
    ),
  address: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 3, 'Type your name')
    .refine((val) => !val || val.length <= 100, 'Maximum 100 symbols'),
})

export type Redact = z.infer<typeof RedactSchema>
