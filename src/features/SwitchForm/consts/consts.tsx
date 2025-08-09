import z from 'zod'

export const UserRegisterSchema = z.object({
  email: z.email({ message: 'Некоретна пошта' }),
  password: z
    .string()
    .min(8, { message: 'Пароль має містити хоча б 8 символів' }),
})

export type UserRegister = z.infer<typeof UserRegisterSchema>
