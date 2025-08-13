import { useNavigate } from 'react-router-dom'
import { getRoute } from '@/shared/helpers/getRoute'
import { showSuccessToast } from '@/shared/helpers/toasts/showSuccsesToast'
import { addProductToCart } from '../api/addProductToCart'
import { processingRequestResult } from '@/shared/helpers/processingRequestResult'
import useLoading from '@/shared/hooks/useLoading'

interface UseAddToCartProps {
  productId: number
  quantityInCart?: number
}

export function useAddToCart({ productId, quantityInCart }: UseAddToCartProps) {
  const navigate = useNavigate()
  const [loading, startLoading] = useLoading()

  const addToCart = async (quantity: number) => {
    await startLoading(async () => {
      const answer = await addProductToCart({
        quantity: quantity + (quantityInCart ?? 0),
        id: productId,
      })
      answer.match(
        (result) => {
          showSuccessToast(`product ${result[0].product.name} added success`)
          navigate(getRoute('home'))
        },
        (error) => {
          if (error.message === 'Unauthorized') navigate(getRoute('login'))
          processingRequestResult(answer)
        }
      )
    })
  }

  return { addToCart, loading }
}
