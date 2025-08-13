import { z } from 'zod'
import { ProductSchema } from '../product/Product'

export const CartProductSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
  product: ProductSchema,
})

export type CartProduct = z.infer<typeof CartProductSchema>
