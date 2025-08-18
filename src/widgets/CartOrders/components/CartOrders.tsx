import { Section } from './CartOrders.styled'
import Container from '@/components/ui/Container'
import CartProductList from './CartProductList'
import CartTotalPrice from './CartTotalPrice'
import CartOrderForm from './CartOrderForm'
import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getCart } from '../api/getCart'
import { processingRequestThunks } from '@/shared/helpers/processingRequestHandlers/processingRequestThunks'

function CartOrders() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getCartData = async () => {
      const answer = await dispatch(getCart())
      processingRequestThunks(answer)
    }
    getCartData()
  }, [])

  return (
    <Section>
      <Container className="flex flex-col">
        <CartProductList />
        <CartTotalPrice />
        <CartOrderForm />
      </Container>
    </Section>
  )
}

export default CartOrders
