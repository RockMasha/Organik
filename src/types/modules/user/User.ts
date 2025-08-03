import { z } from 'zod'
import { CartSchema } from './Cart'

export const UserSchema = z.object({
  email: z.email('Invalid email format.'),
  cart: CartSchema,
  first_name: z
    .string()
    .min(2, 'Min 2 characters.')
    .max(50, 'Max 50 characters.')
    .nullable(),
  last_name: z
    .string()
    .min(2, 'Min 2 characters.')
    .max(50, 'Max 50 characters.')
    .nullable(),
  phone: z
    .string()
    .min(10, 'Min 10 characters.')
    .max(15, 'Max 15 characters.')
    .nullable(),
  address: z
    .string()
    .min(5, 'Min 5 characters.')
    .max(200, 'Max 200 characters.')
    .nullable(),
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type User = z.infer<typeof UserSchema>
