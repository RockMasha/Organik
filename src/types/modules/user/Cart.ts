import { z } from 'zod'

export const CartSchema = z.object({
  id: z.number(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
  products: z.array(z.unknown()).optional(), // пізніше треба дописати нормальний тип
})

export type Cart = z.infer<typeof CartSchema>
