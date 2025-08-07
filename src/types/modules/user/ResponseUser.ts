import { z } from 'zod'
import { UserSchema } from './User'

export const ResponseUserSchema = z.object({
  user: UserSchema,
  token: z.string(),
})

export type ResponseUser = z.infer<typeof ResponseUserSchema>
