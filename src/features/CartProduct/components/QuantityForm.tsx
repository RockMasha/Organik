import { ProductQualityInput, ProductQualityLabel } from './CartProduct.styled'
import { useQuantityForm } from '../hooks/useQuantityForm'
import CircleLoader from '@/components/ui/loaders/CircleLoader/CircleLoader'
import Text from '@/components/ui/Text'

interface QuantityFormProps {
  quantity: number
  id: number
}

function QuantityForm({ quantity, id }: QuantityFormProps) {
  const { InputProps, errors, loading } = useQuantityForm({ quantity, id })

  return (
    <form>
      <ProductQualityLabel>
        Quantity :
        <ProductQualityInput type="number" {...InputProps} />
        {errors.quantity && <Text type="error">{errors.quantity.message}</Text>}
        {loading && <CircleLoader color="blue" size="30px" />}
      </ProductQualityLabel>
    </form>
  )
}

export default QuantityForm
