import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useEffect } from 'react'
import { refreshUser } from '@/api/refreshUser'
import { useForm } from 'react-hook-form'
import useLoading from '@/shared/hooks/useLoading'
import type { User } from '@/types'
import { OrderFormSchema, type OrderFormData } from '../consts/OrderFormSchema'
import { makeOrder } from '../api/makeOrder'
import { useSelector } from 'react-redux'
import { selectCart } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { getRoute } from '@/shared/helpers/getRoute'
import { processingRequestThunks } from '@/shared/helpers/processingRequestHandlers/processingRequestThunks'
import { useNavigate } from 'react-router-dom'

export const useOrderForm = () => {
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cart = useSelector(selectCart)

  const methods = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: {
      full_name: 'loading...',
      email: 'loading...',
      phone: 'loading...',
      address: 'loading...',
      message: '',
    },
  })

  useEffect(() => {
    const setUserData = async () => {
      const user = await dispatch(refreshUser()).unwrap()
      methods.reset(getUserValues(user))
    }
    setUserData()
  }, [methods])

  const onSubmit = async (data: OrderFormData) => {
    if (!cart) return
    startLoading(async () => {
      const answer = await makeOrder({ ...data, orderProducts: cart.products })
      const result = processingRequestThunks(answer)
      if (result) navigate(getRoute('thankOrder'))
    })
  }

  return { methods, onSubmit, loading }
}

function getUserValues(user: User) {
  return {
    full_name: `${user.first_name ?? ''} ${user.last_name ?? ''}`,
    email: user.email ?? '',
    phone: user.phone ?? '',
    address: user.address ?? '',
  }
}
