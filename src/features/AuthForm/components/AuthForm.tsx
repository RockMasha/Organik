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
import { processingRequestThunks } from '@/shared/helpers/processingRequestHandlers/processingRequestThunks'
import useLoading from '@/shared/hooks/useLoading'
import { registerUser } from '../api/registerUser'
import { loginUser } from '../api/loginUser'
import {
  AuthBtn,
  Form,
  FormItem,
  FormList,
  RegisterLink,
} from './AuthForm.styled'
import { Link, useNavigate } from 'react-router-dom'
import { getRoute } from '@/shared/helpers/getRoute'
import { ROUTES } from '@/shared/consts/ROUTES'

type AuthFormProps = {
  type: 'register' | 'login'
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [loading, startLoading] = useLoading()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isRegister = type === 'register'
  const methods = useForm<UserRegister | UserLogin>({
    resolver: zodResolver(isRegister ? UserRegisterSchema : UserLoginSchema),
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
      if (isRegister && !!response) {
        navigate(getRoute('editProfile'))
      }
    })

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormList>
          <FormItem>
            <FormFieldFull
              name="email"
              label="Email"
              placeholder="Type your email"
            />
          </FormItem>
          <FormItem>
            <FormFieldFull
              name="password"
              label="Password"
              inputType="password"
              placeholder="Type your password"
            />
          </FormItem>
          {isRegister && (
            <FormItem>
              <FormFieldFull
                name="checkPassword"
                label="Repeat password"
                inputType="password"
                placeholder="Type your password again"
              />
            </FormItem>
          )}
        </FormList>
        <AuthBtn type="submit" loader={loading}>
          {isRegister ? 'Sign up' : 'Log in'}
        </AuthBtn>
        {type === 'login' && (
          <RegisterLink>
            Don`t have an account?
            <Link to={getRoute(ROUTES.register)}>Sign up</Link>
          </RegisterLink>
        )}
      </Form>
    </FormProvider>
  )
}

export default AuthForm
