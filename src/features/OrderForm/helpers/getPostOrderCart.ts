import type { CartProduct } from '@/types'

export function getPostOrderProducts(products: CartProduct[]) {
  return products.map(({ product: { id }, quantity }) => {
    return { productId: id, quality: quantity }
  })
}
