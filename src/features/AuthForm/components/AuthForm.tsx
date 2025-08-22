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
import { processingRequestThunks } from '@/shared/helpers/proccesingRequestThunks'
import useLoading from '@/shared/hooks/useLoading'
import { RegisterLink } from './AuthForm.styled'
import { Link, useNavigate } from 'react-router-dom'
import registerUser from '../api/registerUser'
import loginUser from '../api/loginUser'
import { getRoute } from '@/shared/helpers/getRoute'
import { ROUTES } from '@/shared/consts/ROUTES'

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
        <FormFieldFull
          name="email"
          label="Email"
          placeholder="Type your email"
        ></FormFieldFull>
        <FormFieldFull
          name="password"
          label="Password"
          inputType="password"
          placeholder="Type your password"
        ></FormFieldFull>
        {type === 'register' ? (
          <FormFieldFull
            name="checkPassword"
            label="Check password"
            inputType="password"
            placeholder="Type your password again"
          ></FormFieldFull>
        ) : null}
        <ButtonStyled size="sm" type="submit" loader={loading}>
          {type === 'register' ? 'Sign up' : 'Log in'}
        </ButtonStyled>
        {type === 'login' ? (
          <RegisterLink>
            Don`t have an account?
            <Link to={getRoute(ROUTES.register)}>Sign up</Link>
          </RegisterLink>
        ) : null}
      </form>
    </FormProvider>
  )
}

export default AuthForm
