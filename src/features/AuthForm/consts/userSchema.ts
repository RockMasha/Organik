import { z } from 'zod'
import { EmailSchema } from '@/types'

export const UserLoginSchema = z.object({
  email: EmailSchema,
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 symbols' }),
})

export type UserLogin = z.infer<typeof UserRegisterSchema>

export const UserRegisterSchema = UserLoginSchema.extend({
  checkPassword: z
    .string()
    .min(8, { message: 'Password must contain at least 8 symbols' })
    .optional(),
}).refine(
  (data) => {
    if (data.checkPassword !== undefined) {
      return data.password === data.checkPassword
    }
    return true
  },
  {
    message: 'Passwords not equal',
    path: ['checkPassword'],
  }
)

export type UserRegister = z.infer<typeof UserRegisterSchema>
