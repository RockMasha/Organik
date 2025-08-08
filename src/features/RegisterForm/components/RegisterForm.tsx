import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRegisterSchema } from '../consts/consts'
import type z from 'zod'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { registerUser } from '../api/registerUser'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { ButtonStyled } from '@/components/modules/FormFieldFull/FormFieldFull.styled'

type UserRegister = z.infer<typeof UserRegisterSchema>

const RegisterForm = () => {
  const dispatch = useAppDispatch()
  const methods = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: UserRegister) => {
    const a = await dispatch(registerUser(data))
    console.log(a)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <FormFieldFull name="email" label="Пошта"></FormFieldFull>
        <FormFieldFull name="password" label="Пароль"></FormFieldFull>
        <ButtonStyled size="sm" type="submit">
          Confirm
        </ButtonStyled>
      </form>
    </FormProvider>
  )
}

export default RegisterForm


function a(b) {
  return 1
}
