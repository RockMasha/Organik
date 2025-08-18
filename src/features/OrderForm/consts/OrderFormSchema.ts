import z from 'zod'

export const OrderFormSchema = z.object({
  full_name: z.string(),
  email: z.email(),
  phone: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
  address: z.string(),
  message: z.string(),
})

export type OrderFormData = z.infer<typeof OrderFormSchema>
