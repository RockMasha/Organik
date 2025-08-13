import { useEffect, useState } from 'react'
import type { Product, CartProduct } from '@/types'
import { getProductById } from '../api/getProductById'
import { getProductInCart } from '../api/getProductInCart'
import { processingRequestResult } from '@/shared/helpers/processingRequestResult'

export function useProductData(id?: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [cartProduct, setCartProduct] = useState<CartProduct | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      const productRes = processingRequestResult(await getProductById(id))
      if (productRes) setProduct(productRes)

      const cartRes = processingRequestResult(
        await getProductInCart(Number(id)),
        null,
        false
      )
      if (cartRes) setCartProduct(cartRes)
    }

    fetchData()
  }, [id])

  return { product, cartProduct, setCartProduct }
}
