import z from 'zod'

export const OrderFormSchema = z.object({
  full_name: z
    .string('')
    .min(4, 'min symbols 2')
    .max(50, 'max symbols 50')
    .refine((val) => val.trim().split(/\s+/).length === 2, {
      message: 'Name must contain two word: name and surname',
    }),
  email: z.email('this not email'),
  phone: z
    .string('')
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      'phone format must be "+380XXXXXXXXX" or "380XXXXXXXXX"'
    ),
  address: z.string('').min(3, 'min symbols 3').max(100, 'max symbols 100'),
  message: z.string('').max(500, 'max symbols 500').optional(),
})

export type OrderFormData = z.infer<typeof OrderFormSchema>
