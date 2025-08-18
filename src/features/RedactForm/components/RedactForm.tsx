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
  const { methods, onSubmit, loading } = useRedactForm()

  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <FormList>
          <FormItem>
            <FormFieldFull name="first_name" label="First name*" />
          </FormItem>
          <FormItem>
            <FormFieldFull name="last_name" label="Last name*" />
          </FormItem>
          <FormItem>
            <FormFieldFull name="address" label="Address*" />
          </FormItem>
          <FormItem>
            <FormFieldFull name="phone" label="Phone number*" />
          </FormItem>
        </FormList>
        <StyledButton loader={loading}>Confirm</StyledButton>
      </StyledForm>
    </FormProvider>
  )
}

export default RedactForm
