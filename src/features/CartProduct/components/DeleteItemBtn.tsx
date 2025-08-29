import SubmitDialog from '@/components/modules/SubmitDialog/SubmitDialog'
import { useState } from 'react'
import { ProductDeleteBtn } from './CartProduct.styled'
import { deleteProductInCart } from '../api/deleteProductInCart'
import useLoading from '@/shared/hooks/useLoading'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { processingRequestThunks } from '@/shared/helpers/processingRequestHandlers/processingRequestThunks'

interface DeleteItemBtnProps {
  id: number
  name: string
}

function DeleteItemBtn({ id, name }: DeleteItemBtnProps) {
  const [open, setOpen] = useState(false)
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()

  const submitDialog = async () => {
    startLoading(async () => {
      const answer = await dispatch(deleteProductInCart(id))
      processingRequestThunks(answer)
      setOpen(false)
    })
  }

  const rejectDialog = async () => {
    setOpen(false)
  }

  return (
    <>
      <ProductDeleteBtn onClick={() => setOpen(true)}>X</ProductDeleteBtn>
      {open && (
        <SubmitDialog
          questionText={`Are you sure delete item ${name} in cart ?`}
          submitDialog={submitDialog}
          rejectDialog={rejectDialog}
          submitLoading={loading}
        />
      )}
    </>
  )
}

export default DeleteItemBtn
