import { FormProvider } from 'react-hook-form'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { Button } from '@/components/ui/button'
import { InputItem, OrderFormList, TextAreaItem } from './OrderForm.styled'
import { useOrderForm } from '../hooks/useOrderForm'

function OrderForm() {
  const { methods, onSubmit, loading } = useOrderForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
        <OrderFormList>
          <InputItem>
            <FormFieldFull
              name="full_name"
              label="Full Name*"
              placeholder="Your Full Name"
            />
          </InputItem>
          <InputItem>
            <FormFieldFull
              name="address"
              label="Address*"
              placeholder="your company address"
            />
          </InputItem>
          <InputItem>
            <FormFieldFull
              name="email"
              label="Your Email*"
              placeholder="example@yourmail.com"
            />
          </InputItem>
          <InputItem>
            <FormFieldFull
              name="phone"
              label="Phone number*"
              placeholder="Enter your phone"
            />
          </InputItem>
          <TextAreaItem>
            <FormFieldFull
              name="message"
              label="Message"
              placeholder="some extra information"
              variant="textarea"
            />
          </TextAreaItem>
        </OrderFormList>
        <Button className="block mx-auto" size="flattened" loader={loading}>
          Confirm
        </Button>
      </form>
    </FormProvider>
  )
}

export default OrderForm
