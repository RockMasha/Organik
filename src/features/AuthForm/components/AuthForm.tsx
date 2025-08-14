import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  UserLoginSchema,
  UserRegisterSchema,
  type UserLogin,
  type UserRegister,
} from '../consts/userSchema'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { ButtonStyled } from '@/components/modules/FormFieldFull/FormFieldFull.styled'
import { processingRequestThunks } from '@/shared/helpers/processingRequestHandlers/processingRequestThunks'
import useLoading from '@/shared/hooks/useLoading'
import { registerUser } from '../api/registerUser'
import { loginUser } from '../api/loginUser'
import { StyledRegisterLink } from './AuthForm.styled'
import { Link, useNavigate } from 'react-router-dom'

type AuthFormProps = {
  type: 'register' | 'login'
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [loading, startLoading] = useLoading()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const methods = useForm<UserRegister | UserLogin>({
    resolver: zodResolver(
      type === 'register' ? UserRegisterSchema : UserLoginSchema
    ),
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
      const response = processingRequestThunks(action)
      if (
        type === 'register' &&
        response !== undefined &&
        action.meta?.requestStatus === 'fulfilled'
      ) {
        navigate('/profile/edit')
      }
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
        {type === 'login' ? (
          <StyledRegisterLink as={Link} to="/register">
            Не маєте акаунта?
            <span>Зареєструватися</span>
          </StyledRegisterLink>
        ) : null}
      </form>
    </FormProvider>
  )
}

export default AuthForm
