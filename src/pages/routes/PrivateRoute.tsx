import { refreshUser } from '@/api/refreshUser'
import { useEffect, useState } from 'preact/hooks'
import type { JSX } from 'preact/jsx-runtime'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@/types'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import PageLoader from '@/components/modules/PageLoader/PageLoader'

interface PrivateRouteProps {
  redirect?: string
  Component: JSX.Element
}

function PrivateRoute({ redirect = '/login', Component }: PrivateRouteProps) {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(refreshUser())
      .then(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [dispatch])

  if (isLoading) {
    return <PageLoader />
  }

  return isLoggedIn ? Component : <Navigate to={redirect} />
}

export default PrivateRoute
