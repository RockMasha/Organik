import PreviewSection from '@/components/modules/PreviewSection/PreviewSection'
import { CartOrders } from '@/widgets/CartOrders'

function CartPage() {
  return (
    <main>
      <PreviewSection image="cart" title="Cart" />
      <CartOrders />
    </main>
  )
}

export default CartPage
