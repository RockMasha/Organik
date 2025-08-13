import {
  ModalCartForm,
  ModalCartLabel,
  ModalCartInput,
  ModalBtn,
  ModalCartError,
} from './ProductModal.styled'
import { useForm, type FieldValues } from 'react-hook-form'

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

  const quantityValue = watch('quantity', 1)
  const symbolNumb = !Number.isNaN(quantityValue)
    ? String(quantityValue).length
    : 1

  return (
    <ModalCartForm onSubmit={handleSubmit(onSubmit)}>
      <ModalCartLabel>
        Quantity :
        <ModalCartInput
          type="number"
          symbolNumb={symbolNumb}
          {...register('quantity', quantityValidation)}
        />
        {errors.quantity && (
          <ModalCartError>{errors.quantity.message}</ModalCartError>
        )}
      </ModalCartLabel>
      <ModalBtn type="submit" arrow={true} loader={loading}>
        Add To Cart
      </ModalBtn>
    </ModalCartForm>
  )
}

export default AddToCartForm
