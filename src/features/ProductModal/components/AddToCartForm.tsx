import { getSymbolNumbOInput } from '@/shared/helpers/getSymbolNumbOInput'
import {
  ModalCartForm,
  ModalCartLabel,
  ModalCartInput,
  ModalBtn,
  // ModalCartError,
} from './ProductModal.styled'
import { useForm, type FieldValues } from 'react-hook-form'
import Text from '@/components/ui/Text'

interface AddToCartFormProps {
  onSubmit: (data: FieldValues) => void
  loading: boolean
}

const defaultValues = {
  quantity: 1,
}

const quantityValidation = {
  required: 'Quantity is required',
  min: { value: 1, message: 'Must be a positive number' },
  max: { value: 999, message: 'Max value is 999' },
  valueAsNumber: true,
}

function AddToCartForm({ onSubmit, loading }: AddToCartFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues })

  const symbolNumb = getSymbolNumbOInput(
    watch('quantity', defaultValues.quantity)
  )

  return (
    <ModalCartForm onSubmit={handleSubmit(onSubmit)}>
      <ModalCartLabel>
        Quantity :
        <ModalCartInput
          type="number"
          symbolNumb={symbolNumb}
          {...register('quantity', quantityValidation)}
        />
        {errors.quantity && <Text type="error">{errors.quantity.message}</Text>}
      </ModalCartLabel>
      <ModalBtn type="submit" arrow={true} loader={loading}>
        Add To Cart
      </ModalBtn>
    </ModalCartForm>
  )
}

export default AddToCartForm
