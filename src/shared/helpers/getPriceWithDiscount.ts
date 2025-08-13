export function getPriceWithDiscount(price: number, discount: number) {
  return price - (price / 100) * discount
}
