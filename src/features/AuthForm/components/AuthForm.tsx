import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRegisterSchema } from '../consts/userChema'
import type z from 'zod'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { ButtonStyled } from '@/components/modules/FormFieldFull/FormFieldFull.styled'
import { processingRequestThunks } from '@/shared/helpers/proccesingRequestThunks'
import useLoading from '@/shared/hooks/useLoading'
import { registerUser } from '../api/registerUser'
import { loginUser } from '../api/loginUser'

type UserRegister = z.infer<typeof UserRegisterSchema>

type AuthFormProps = {
  type: 'register' | 'login'
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  const methods = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      checkPassword: '',
    },
  })

  const authFunctions = {
    register: registerUser,
    login: loginUser,
  }

  const onSubmit = (data: UserRegister) =>
    startLoading(async () => {
      const { email, password } = data
      const action = await dispatch(authFunctions[type]({ email, password }))
      processingRequestThunks(action)
    })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <FormFieldFull name="email" label="Пошта"></FormFieldFull>
        <FormFieldFull
          name="password"
          label="Пароль"
          inputType="password"
        ></FormFieldFull>
        {type === 'register' ? (
          <FormFieldFull
            name="checkPassword"
            label="Повторіть пароль"
            inputType="password"
          ></FormFieldFull>
        ) : null}
        <ButtonStyled size="sm" type="submit" loader={loading}>
          {type === 'register' ? 'Зареєструватися' : 'Увійти'}
        </ButtonStyled>
      </form>
    </FormProvider>
  )
}

export default AuthForm
