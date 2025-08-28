import { z } from 'zod'

export const OrderSchema = z.object({
  full_name: z
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
  email: z.email(),
  paid: z.boolean(),
  status: z.enum(['pending', 'fulfilled', 'rejected']),
  id: z.number(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
})

export type Order = z.infer<typeof OrderSchema>
