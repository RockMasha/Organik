import { z } from 'zod'

export const CartSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  products: z.array(z.unknown()), // пізніше треба дописати нормальний тип
})

export type Cart = z.infer<typeof CartSchema>
