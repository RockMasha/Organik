import { CartOrders } from '@/widgets/CartOrders'
import { CartPreviewSection } from '@/widgets/CartPreviewSection'

function CartPage() {
  return (
    <main>
      <CartPreviewSection />
      <CartOrders />
    </main>
  )
}

export default CartPage
