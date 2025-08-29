import { z } from 'zod'
import { CategorySchema } from './Category'

const ProductImgSchema = z
  .string()
  .regex(
    /^https:\/\/res\.cloudinary\.com\/dv2db4ffj\/image\/upload\/v\d+\/.*\.png$/,
    'Invalid image URL format.'
  )

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  discount: z.number(),
  img: ProductImgSchema,
  rate: z.number(),
  category: CategorySchema,
})

export type Product = z.infer<typeof ProductSchema>
