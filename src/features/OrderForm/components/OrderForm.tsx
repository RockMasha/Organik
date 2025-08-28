import { FormProvider } from 'react-hook-form'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { Button } from '@/components/ui/button'
import { InputItem, OrderFormList, TextAreaItem } from './OrderForm.styled'
import { useOrderForm } from '../hooks/useOrderForm'

function OrderForm() {
  const { methods, onSubmit, postOrderLoading, fetchUserLoading } =
    useOrderForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
        <OrderFormList>
          <InputItem>
            <FormFieldFull
              name="full_name"
              label="Full Name*"
              placeholder="Your Full Name"
              loading={fetchUserLoading}
            />
          </InputItem>
          <InputItem>
            <FormFieldFull
              name="address"
              label="Address*"
              placeholder="your company address"
              loading={fetchUserLoading}
            />
          </InputItem>
          <InputItem>
            <FormFieldFull
              name="email"
              label="Your Email*"
              placeholder="example@yourmail.com"
              loading={fetchUserLoading}
            />
          </InputItem>
          <InputItem>
            <FormFieldFull
              name="phone"
              label="Phone number*"
              placeholder="Enter your phone"
              loading={fetchUserLoading}
            />
          </InputItem>
          <TextAreaItem>
            <FormFieldFull
              name="message"
              label="Message"
              placeholder="some extra information"
              variant="textarea"
              loading={fetchUserLoading}
            />
          </TextAreaItem>
        </OrderFormList>
        <Button
          className="flex mx-auto"
          size="flattened"
          loader={postOrderLoading}
        >
          Confirm
        </Button>
      </form>
    </FormProvider>
  )
}

export default OrderForm
