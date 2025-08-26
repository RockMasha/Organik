import { useRef, type ChangeEvent } from 'react'
import { updateProductInCart } from '../api/updateProductInCart'
import type { CartProductData } from '../types/CartProductData'
import { useForm } from 'react-hook-form'
import { getSymbolNumbOInput } from '@/shared/helpers/getSymbolNumbOInput'
import useLoading from '@/shared/hooks/useLoading'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { processingRequestThunks } from '@/shared/helpers/processingRequestHandlers/processingRequestThunks'

const quantityValidation = {
  required: 'Quantity is required',
  min: { value: 1, message: 'Must be a positive number' },
  max: { value: 999, message: 'Max value is 999' },
  valueAsNumber: true,
}

export function useQuantityForm({ quantity, id }: CartProductData) {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      quantity: quantity,
    },
    mode: 'onChange',
  })

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()

  async function updateProduct(event: ChangeEvent<HTMLInputElement>) {
    const isValid = await trigger('quantity')    
    if (!isValid) return
    const value = Number(event.currentTarget.value)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(async () => {
      startLoading(async () => {
        const answer = await dispatch(
          updateProductInCart({ quantity: value, id })
        )
        processingRequestThunks(answer)
      })
    }, 500)
  }

  const symbolNumb = getSymbolNumbOInput(watch('quantity', quantity))

  const InputProps = {
    ...register('quantity', {
      ...quantityValidation,
      onChange: updateProduct,
    }),
    symbolNumb,
  }

  return { InputProps, errors, loading }
}
