import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { FormProvider } from 'react-hook-form'
import {
  FormItem,
  FormList,
  StyledButton,
  StyledForm,
} from './RedactForm.styled'
import { useRedactForm } from '../hooks/useRedactForm'

const RedactForm = () => {
  const { methods, onSubmit, loading, loadingFields } = useRedactForm()

  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <FormList>
          <FormItem>
            <FormFieldFull
              name="first_name"
              label="First name*"
              placeholder="Type your name"
              loading={loadingFields}
            />
          </FormItem>
          <FormItem>
            <FormFieldFull
              name="last_name"
              label="Last name*"
              placeholder="Type your surname"
              loading={loadingFields}
            />
          </FormItem>
          <FormItem>
            <FormFieldFull
              name="phone"
              label="Phone number*"
              placeholder="Type your phone number"
              loading={loadingFields}
            />
          </FormItem>
          <FormItem>
            <FormFieldFull
              name="address"
              label="Address*"
              placeholder="Type your address"
              loading={loadingFields}
            />
          </FormItem>
        </FormList>
        <StyledButton loader={loading}>Confirm</StyledButton>
      </StyledForm>
    </FormProvider>
  )
}

export default RedactForm
