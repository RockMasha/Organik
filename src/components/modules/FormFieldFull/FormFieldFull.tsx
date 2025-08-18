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
}

const FormFieldFull = ({
  name,
  label,
  inputType,
  placeholder,
  variant,
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
                variant="transparent"
                type={inputType}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          )}
          {fieldType === 'textarea' && (
            <FormControl>
              <TextAreaStyled
                variant="transparent"
                placeholder={placeholder}
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
