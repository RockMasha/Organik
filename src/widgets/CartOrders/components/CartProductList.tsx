import OrderProduct from '@/features/CartProduct/components/CartProduct'
import { ProductList } from './CartOrders.styled'
import { useSelector } from 'react-redux'
import { selectCart } from '@/store/slices/cart/cartSelectors'
import OrderProductSkeleton from '@/features/CartProduct/components/CartProductSkeleton'
import NoProductsInCart from './NoProductsInCart'

function CartProductList() {
  const cart = useSelector(selectCart)

  return (
    <>
      {cart && cart.products.length !== 0 && (
        <ProductList>
          {cart.products.map((data) => (
            <OrderProduct key={data.id} data={data} />
          ))}
        </ProductList>
      )}
      {!cart && (
        <ProductList>
          {new Array(3).fill(0).map((_, index) => (
            <OrderProductSkeleton key={index} />
          ))}
        </ProductList>
      )}
      {cart && cart.products.length === 0 && <NoProductsInCart />}
    </>
  )
}

export default CartProductList
