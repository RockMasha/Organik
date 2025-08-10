import z from 'zod'

export const UserRegisterSchema = z
  .object({
    email: z.email({ message: 'Некоретна пошта' }),
    password: z
      .string()
      .min(8, { message: 'Пароль має містити хоча б 8 символів' }),
    checkPassword: z
      .string()
      .min(8, { message: 'Пароль має містити хоча б 8 символів' })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.checkPassword !== undefined) {
        return data.password === data.checkPassword
      }
      return true
    },
    {
      message: 'Паролі не збігаються',
      path: ['checkPassword'],
    }
  )

export type UserRegister = z.infer<typeof UserRegisterSchema>
