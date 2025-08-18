import { getPriceWithDiscount } from '@/shared/helpers/getPriceWithDiscount'
import type { Cart } from '@/types'

export function getTotalPrice(cart: Cart) {
  let totalPrice = 0
  let TotalDiscount = 0

  for (const item of cart.products) {
    const {
      quantity,
      product: { price, discount },
    } = item
    totalPrice += Math.round(quantity * getPriceWithDiscount(price, discount))
    TotalDiscount += Math.round(quantity * (price / 100) * discount)
  }

  return { totalPrice, TotalDiscount }
}
