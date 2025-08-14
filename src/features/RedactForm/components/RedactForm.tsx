import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { FormProvider } from 'react-hook-form'
import { StyledForm } from './RedactForm.styled'
import { Button } from '@/components/ui/button'
import { useRedactForm } from '../hooks/useRedactForm'

const RedactForm = () => {
  const { methods, onSubmit, loading } = useRedactForm()

  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <div>
          <FormFieldFull name="first_name" label="Ім'я"></FormFieldFull>
          <FormFieldFull name="last_name" label="Прізвище"></FormFieldFull>
        </div>
        <div>
          <FormFieldFull name="phone" label="Номер телефону"></FormFieldFull>
          <FormFieldFull name="address" label="Адреса"></FormFieldFull>
        </div>
        <Button loader={loading}>Підтвердити</Button>
      </StyledForm>
    </FormProvider>
  )
}

export default RedactForm
