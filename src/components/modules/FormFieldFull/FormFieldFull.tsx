import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import {
  FormLabelStyled,
  InputStyled,
  TextAreaStyled,
} from './FormFieldFull.styled'

type FormFieldFullProps = {
  name: string
  label: string
  inputType?: string
  placeholder?: string
  variant?: 'input' | 'textarea'
  loading?: boolean
}

const FormFieldFull = ({
  name,
  label,
  inputType,
  placeholder,
  variant,
  loading,
}: FormFieldFullProps) => {
  const { control } = useFormContext()
  const fieldType = variant ? variant : 'input'

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabelStyled className="text-[20px]">{label}</FormLabelStyled>
          {fieldType === 'input' && (
            <FormControl>
              <InputStyled
                placeholder={loading ? 'wait a moment...' : placeholder}
                variant="transparent"
                type={inputType}
                {...field}
              />
            </FormControl>
          )}
          {fieldType === 'textarea' && (
            <FormControl>
              <TextAreaStyled
                variant="transparent"
                placeholder={loading ? 'wait a moment...' : placeholder}
                {...field}
              />
            </FormControl>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldFull
