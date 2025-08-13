import { z } from 'zod'
import { CartProductSchema } from '../cart/CartProduct'

export const UserCartSchema = z.object({
  id: z.number(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
  cartItems: z.array(CartProductSchema).optional(),
})

export type UserCart = z.infer<typeof UserCartSchema>
