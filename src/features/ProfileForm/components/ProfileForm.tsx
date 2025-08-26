import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import type { Redact } from '@/features/RedactForm/consts/RedactSchema'
import { FormProvider, useForm } from 'react-hook-form'

function ProfileForm() {
  const methods = useForm<Redact>({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone: '',
      address: '',
    },
  })

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4 items-center">
        <div>
          <FormFieldFull name="first_name" label="Name"></FormFieldFull>
          <FormFieldFull name="last_name" label="Surname"></FormFieldFull>
        </div>
        <div>
          <FormFieldFull name="phone" label="Phone number"></FormFieldFull>
          <FormFieldFull name="address" label="Address"></FormFieldFull>
        </div>
        <button>Edit</button>
        <button>History</button>
        <button>Cart</button>
      </form>
    </FormProvider>
  )
}

export default ProfileForm
