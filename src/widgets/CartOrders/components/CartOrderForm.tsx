import { Button } from '@/components/ui/button'
import { OrderForm } from '@/features/OrderForm'
import { useState } from 'react'

function CartOrderForm() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  return (
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
  )
}

export default CartOrderForm
