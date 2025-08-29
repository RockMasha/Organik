import { z } from 'zod'
import { ProductSchema } from '../product/Product'

export const CartProductSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  product: ProductSchema,
})

export type CartProduct = z.infer<typeof CartProductSchema>
