import { categories } from '@/shared/consts/Categories'
import type { Category } from '../modules/product/Category'

export function isCategory(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const candidate = value as Partial<Category>

  return categories.some(
    (item) => item.id === candidate.id && item.name === candidate.name
  )
}
