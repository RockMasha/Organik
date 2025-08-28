import {
  AddressSchema,
  FirstNameSchema,
  LastNameSchema,
  PhoneSchema,
} from '@/types'
import z from 'zod'

export const RedactSchema = z.object({
  first_name: FirstNameSchema.optional(),
  last_name: LastNameSchema.optional(),
  phone: PhoneSchema.optional(),
  address: AddressSchema.optional(),
})

export type Redact = z.infer<typeof RedactSchema>
