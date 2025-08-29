import {
  AddressSchema,
  EmailSchema,
  FullNameSchema,
  PhoneSchema,
} from '@/types'
import { z } from 'zod'

export const OrderFormSchema = z.object({
  full_name: FullNameSchema,
  email: EmailSchema,
  phone: PhoneSchema,
  address: AddressSchema,
  message: z.string('').max(500, 'max symbols 500').optional(),
})

export type OrderFormData = z.infer<typeof OrderFormSchema>
