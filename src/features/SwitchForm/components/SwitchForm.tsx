import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRegisterSchema } from '../consts/consts'
import type z from 'zod'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { registerUser } from '../api/registerUser'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { ButtonStyled } from '@/components/modules/FormFieldFull/FormFieldFull.styled'
import { loginUser } from '../api/loginUser'
import { processingRequestThunks } from '@/shared/helpers/proccesingRequestThunks'

type UserRegister = z.infer<typeof UserRegisterSchema>

type SwitchFormProps = {
  formType: 'registration' | 'login'
}

const SwitchForm = ({ formType }: SwitchFormProps) => {
  const dispatch = useAppDispatch()
  const methods = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onRegisterSubmit = async (data: UserRegister) => {
    const action = await dispatch(registerUser(data))
    processingRequestThunks(await action.payload)
  }

  const onLoginSubmit = async (data: UserRegister) => {
    const action = await dispatch(loginUser(data))
    processingRequestThunks(await action.payload)
  }

  return (
    <FormProvider {...methods}>
      {formType === 'registration' ? (
        <form
          onSubmit={methods.handleSubmit(onRegisterSubmit)}
          className="flex flex-col gap-4 items-center"
        >
          <FormFieldFull name="email" label="Пошта"></FormFieldFull>
          <FormFieldFull
            name="password"
            label="Пароль"
            inputType="password"
          ></FormFieldFull>
          <ButtonStyled size="sm" type="submit">
            Зареєструватися
          </ButtonStyled>
        </form>
      ) : formType === 'login' ? (
        <form
          onSubmit={methods.handleSubmit(onLoginSubmit)}
          className="flex flex-col gap-4 items-center"
        >
          <FormFieldFull name="email" label="Пошта"></FormFieldFull>
          <FormFieldFull
            name="password"
            label="Пароль"
            inputType="password"
          ></FormFieldFull>
          <ButtonStyled size="sm" type="submit">
            Увійти
          </ButtonStyled>
        </form>
      ) : null}
    </FormProvider>
  )
}

export default SwitchForm
