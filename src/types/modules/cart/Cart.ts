import { z } from 'zod'
import { CartProductSchema } from '../cart/CartProduct'

export const CartSchema = z.object({
  id: z.number(),
  products: z.array(CartProductSchema),
})

export type Cart = z.infer<typeof CartSchema>
