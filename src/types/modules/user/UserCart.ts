import { z } from 'zod'
import { CartProductSchema } from '../cart/CartProduct'

export const UserCartSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  cartItems: z.array(CartProductSchema).optional(),
})

export type UserCart = z.infer<typeof UserCartSchema>
