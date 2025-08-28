import { z } from 'zod'
import { UserCartSchema } from './UserCart'
import { FirstNameSchema } from './FirstName'
import { LastNameSchema } from './LastName'
import { PhoneSchema } from './Phone'
import { AddressSchema } from './Address'
import { EmailSchema } from './Email'

export const UserSchema = z.object({
  email: EmailSchema,
  cart: UserCartSchema,
  first_name: FirstNameSchema.nullable(),
  last_name: LastNameSchema.nullable(),
  phone: PhoneSchema.nullable(),
  address: AddressSchema.nullable(),
  id: z.number(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
})

export type User = z.infer<typeof UserSchema>
