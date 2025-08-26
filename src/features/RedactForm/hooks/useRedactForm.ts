import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { redactUser } from '../api/redactUser'
import { useNavigate } from 'react-router-dom'
import type { Redact } from '../consts/RedactSchema'
import { useEffect } from 'react'
import { refreshUser } from '@/api/refreshUser'
import { useForm } from 'react-hook-form'
import useLoading from '@/shared/hooks/useLoading'
import { getRoute } from '@/shared/helpers/getRoute'

export const useRedactForm = () => {
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const methods = useForm<Redact>({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone: '',
      address: '',
    },
  })

  useEffect(() => {
    startLoading(async () => {
      const user = await dispatch(refreshUser()).unwrap()
      methods.reset({
        first_name: user.first_name ?? '',
        last_name: user.last_name ?? '',
        phone: user.phone ?? '',
        address: user.address ?? '',
      })
    })
  }, [methods])

  const onSubmit = async (data: Redact) => {
    const response = await dispatch(redactUser(data)).unwrap()
    methods.reset({
      first_name: response.first_name ?? '',
      last_name: response.last_name ?? '',
      phone: response.phone ?? '',
      address: response.address ?? '',
    })
    navigate(getRoute('home'))
  }

  return { methods, onSubmit, loading }
}
