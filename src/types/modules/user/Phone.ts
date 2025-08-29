import { string } from 'zod'

export const PhoneSchema = string('').regex(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
  'phone format must be "+380XXXXXXXXX" or "380XXXXXXXXX"'
)
