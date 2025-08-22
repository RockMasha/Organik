import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { FormProvider } from 'react-hook-form'
import { StyledForm } from './RedactForm.styled'
import { Button } from '@/components/ui/button'
import { useRedactForm } from '../hooks/useRedactForm'

const RedactForm = () => {
  const { methods, onSubmit, loading, loadingFields } = useRedactForm()

  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <div>
          <FormFieldFull
            name="first_name"
            label="Name"
            placeholder="Type your name"
            loading={loadingFields}
          ></FormFieldFull>
          <FormFieldFull
            name="last_name"
            label="Surname"
            placeholder="Type your surname"
            loading={loadingFields}
          ></FormFieldFull>
        </div>
        <div>
          <FormFieldFull
            name="phone"
            label="Phone number"
            placeholder="Type your phone number"
            loading={loadingFields}
          ></FormFieldFull>
          <FormFieldFull
            name="address"
            label="Address"
            placeholder="Type your address"
            loading={loadingFields}
          ></FormFieldFull>
        </div>
        <Button loader={loading}>Confirm</Button>
      </StyledForm>
    </FormProvider>
  )
}

export default RedactForm
