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
}

const FormFieldFull = ({ name, label }: FormFieldFullProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4">
          <FormLabelStyled className="text-[20px]">{label}</FormLabelStyled>
          <FormControl>
            <InputStyled {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldFull
