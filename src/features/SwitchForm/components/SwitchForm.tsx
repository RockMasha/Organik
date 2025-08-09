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
import useLoading from '@/shared/hooks/useLoading'

type UserRegister = z.infer<typeof UserRegisterSchema>

type SwitchFormProps = {
  formType: 'registration' | 'login'
}

const SwitchForm = ({ formType }: SwitchFormProps) => {
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  const methods = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onRegisterSubmit = (data: UserRegister) =>
    startLoading(async () => {
      const action = await dispatch(registerUser(data))
      processingRequestThunks(action)
    })

  const onLoginSubmit = (data: UserRegister) =>
    startLoading(async () => {
      const action = await dispatch(loginUser(data))
      processingRequestThunks(action)
    })

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
          <ButtonStyled size="sm" type="submit" loader={true}>
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
          <ButtonStyled size="flatted" type="submit" loader={loading}>
            Увійти
          </ButtonStyled>
        </form>
      ) : null}
    </FormProvider>
  )
}

export default SwitchForm
