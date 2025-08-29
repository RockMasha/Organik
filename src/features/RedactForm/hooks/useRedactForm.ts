import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { RedactSchema, type Redact } from '../consts/RedactSchema'
import { useEffect } from 'react'
import { refreshUser } from '@/api/shared/refreshUser'
import { useForm, type UseFormReturn } from 'react-hook-form'
import useLoading from '@/shared/hooks/useLoading'
import { getRoute } from '@/shared/helpers/getRoute'
import { redactUser } from '../api/redactUser'
import { zodResolver } from '@hookform/resolvers/zod'

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
    phone: data.phone ?? '',
    address: data.address ?? '',
  })
}

export const useRedactForm = () => {
  const [postOrderLoading, startPostOrderLoading] = useLoading()
  const [fetchUserLoading, startFetchUserLoading] = useLoading()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const methods = useForm<Redact>({
    defaultValues,
    resolver: zodResolver(RedactSchema),
  })

  useEffect(() => {
    startFetchUserLoading(async () => {
      const user = await dispatch(refreshUser()).unwrap()
      resetForm({ methods, data: user })
    })
  }, [methods])

  const onSubmit = async (data: Redact) => {
    startPostOrderLoading(async () => {
      const response = await dispatch(redactUser(data)).unwrap()
      resetForm({ methods, data: response })
      navigate(getRoute('profile'))
    })
  }

  return { methods, onSubmit, postOrderLoading, fetchUserLoading }
}
