import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
// import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { refreshUser } from '@/api/refreshUser'
import { useForm } from 'react-hook-form'
import useLoading from '@/shared/hooks/useLoading'
import type { User } from '@/types'
import type { OrderFormData } from '../consts/OrderFormSchema'
// import { getRoute } from '@/shared/helpers/getRoute'
// import { makeOrder } from '../api/makeOrder'

export const useOrderForm = () => {
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  //   const navigate = useNavigate()
  const methods = useForm<OrderFormData>({
    defaultValues: {
      full_name: 'loading...',
      email: 'loading...',
      phone: 'loading...',
      address: 'loading...',
      message: '',
    },
  })

  useEffect(() => {
    startLoading(async () => {
      const user = await dispatch(refreshUser()).unwrap()
      methods.reset(getUserValues(user))
    })
  }, [methods])

  const onSubmit = async () => {
    // makeOrder(data)
    // navigate(getRoute('thankOrder'))
  }

  return { methods, onSubmit, loading }
}

function getUserValues(user: User) {
  return {
    full_name: `${user.first_name} ${user.last_name}`,
    email: user.email ?? '',
    phone: user.phone ?? '',
    address: user.address ?? '',
  }
}
