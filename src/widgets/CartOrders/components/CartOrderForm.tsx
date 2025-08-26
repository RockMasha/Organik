import { Button } from '@/components/ui/button'
import { OrderForm } from '@/features/OrderForm'
import { selectCart } from '@/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function CartOrderForm() {
  const cart = useSelector(selectCart)

  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  return (
    <>
      {cart && cart.products.length !== 0 && (
        <>
          {!isFormOpen ? (
            <Button
              className="mx-auto"
              size="flattened"
              arrow={true}
              onClick={openForm}
            >
              To order
            </Button>
          ) : (
            <OrderForm />
          )}
        </>
      )}
    </>
  )
}

export default CartOrderForm
