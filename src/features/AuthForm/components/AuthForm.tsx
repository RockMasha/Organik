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
import { AuthBtn, FormItem, FormList } from './AuthForm.styled'
import { Form, Link, useNavigate } from 'react-router-dom'
import { StyledLink } from '@/components/modules/StyledLink/StyledLink'
import { getRoute } from '@/shared/helpers/getRoute'

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
        navigate(getRoute('editProfile'))
      }
    })

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <FormList>
          <FormItem>
            <FormFieldFull name="email" label="Пошта" />
          </FormItem>
          <FormItem>
            <FormFieldFull
              name="password"
              label="Пароль"
              inputType="password"
            />
          </FormItem>
          {type === 'register' && (
            <FormItem>
              <FormFieldFull
                name="checkPassword"
                label="Повторіть пароль"
                inputType="password"
              />
            </FormItem>
          )}
        </FormList>
        <AuthBtn type="submit" loader={loading}>
          {type === 'register' ? 'Зареєструватися' : 'Увійти'}
        </AuthBtn>
        {type === 'login' && (
          <StyledLink as={Link} to={getRoute('register')}>
            Не маєте акаунта?
            <span>Зареєструватися</span>
          </StyledLink>
        )}
      </Form>
    </FormProvider>
  )
}

export default AuthForm
