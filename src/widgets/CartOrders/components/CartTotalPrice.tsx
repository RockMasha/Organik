import { useSelector } from 'react-redux'
import { TotalPriceBox, TotalPriceText } from './CartOrders.styled'
import { selectCart } from '@/store/slices/cart/cartSelectors'
import { getTotalPrice } from '../helpers/getTotalPrice'

function CartTotalPrice() {
  const cart = useSelector(selectCart)
  const totalPrices = cart ? getTotalPrice(cart) : null

  return (
    <>
      {totalPrices && cart?.products.length !== 0 && (
        <TotalPriceBox>
          <TotalPriceText>Total Cost {totalPrices.totalPrice}$</TotalPriceText>
          <TotalPriceText>Discount {totalPrices.TotalDiscount}$</TotalPriceText>
        </TotalPriceBox>
      )}
    </>
  )
}

export default CartTotalPrice
