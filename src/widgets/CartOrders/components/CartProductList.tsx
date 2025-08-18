import OrderProduct from '@/features/CartProduct/components/CartProduct'
import { ProductList } from './CartOrders.styled'
import { useSelector } from 'react-redux'
import { selectCart } from '@/store/slices/cart/cartSelectors'

function CartProductList() {
  const cart = useSelector(selectCart)

  return (
    <ProductList>
      {cart &&
        cart.products.map((data) => <OrderProduct key={data.id} data={data} />)}
    </ProductList>
  )
}

export default CartProductList
