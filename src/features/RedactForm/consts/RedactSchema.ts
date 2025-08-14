import z from 'zod'

export const RedactSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  phone: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
  address: z.string(),
})

export type Redact = z.infer<typeof RedactSchema>
