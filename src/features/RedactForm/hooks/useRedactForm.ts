import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import type { Redact } from '../consts/RedactSchema'
import { useEffect, useState } from 'react'
import { refreshUser } from '@/api/refreshUser'
import { useForm, type UseFormReturn } from 'react-hook-form'
import useLoading from '@/shared/hooks/useLoading'
import { getRoute } from '@/shared/helpers/getRoute'
import { redactUser } from '../api/redactUser'

const defaultValues = {
  first_name: '',
  last_name: '',
  phone: '',
  address: '',
}

type resetFormProps = {
  methods: UseFormReturn<Redact>
  data: {
    first_name: string | null
    last_name: string | null
    phone: string | null
    address: string | null
  }
}

const resetForm = ({ methods, data }: resetFormProps) => {
  methods.reset({
    first_name: data.first_name ?? '',
    last_name: data.last_name ?? '',
    phone: data.phone ?? '+',
    address: data.address ?? '',
  })
}

export const useRedactForm = () => {
  const [loadingFields, setLoadingFields] = useState(true)
  const [loading, startLoading] = useLoading()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const methods = useForm<Redact>({ defaultValues })

  useEffect(() => {
    startLoading(async () => {
      const user = await dispatch(refreshUser()).unwrap()
      resetForm({ methods, data: user })
      setLoadingFields(false)
    })
  }, [methods])

  const onSubmit = async (data: Redact) => {
    const response = await dispatch(redactUser(data)).unwrap()
    resetForm({ methods, data: response })
    navigate(getRoute('home'))
  }

  return { methods, onSubmit, loading, loadingFields }
}
