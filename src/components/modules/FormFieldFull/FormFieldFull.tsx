import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { FormLabelStyled, InputStyled } from './FormFieldFull.styled'

type FormFieldFullProps = {
  name: string
  label: string
  placeholder: string
  inputType?: string
  loading?: boolean
}

const FormFieldFull = ({
  name,
  label,
  inputType,
  placeholder,
  loading,
}: FormFieldFullProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4">
          <FormLabelStyled className="text-[20px]">{label}</FormLabelStyled>
          <FormControl>
            {loading ? (
              <InputStyled
                placeholder="wait a moment..."
                variant="transparent"
                type={inputType}
                {...field}
              />
            ) : (
              <InputStyled
                placeholder={placeholder}
                variant="transparent"
                type={inputType}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldFull
