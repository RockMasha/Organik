import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRegisterSchema } from '../consts/userConsts'
import type z from 'zod'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import FormFieldFull from '@/components/modules/FormFieldFull/FormFieldFull'
import { ButtonStyled } from '@/components/modules/FormFieldFull/FormFieldFull.styled'
import { processingRequestThunks } from '@/shared/helpers/proccesingRequestThunks'
import useLoading from '@/shared/hooks/useLoading'
import type { registerUser } from '../api/registerUser'
import type { loginUser } from '../api/loginUser'

type UserRegister = z.infer<typeof UserRegisterSchema>

type AuthThunk = typeof registerUser | typeof loginUser

type SwitchFormProps = {
  functionType: AuthThunk
  buttonText: 'Зареєструватися' | 'Увійти'
}

const SwitchForm = ({ functionType, buttonText }: SwitchFormProps) => {
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  const methods = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: UserRegister) =>
    startLoading(async () => {
      const action = await dispatch(functionType(data))
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
        <ButtonStyled size="sm" type="submit" loader={loading}>
          {buttonText}
        </ButtonStyled>
      </form>
    </FormProvider>
  )
}

export default SwitchForm
