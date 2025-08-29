import { string } from 'zod'

export const PhoneSchema = string('').regex(
  /^(\+380|380)\d{9}$/,
  'phone format must be "+380XXXXXXXXX" or "380XXXXXXXXX"'
)
