import { email } from 'zod'

export const EmailSchema = email('this not email')
