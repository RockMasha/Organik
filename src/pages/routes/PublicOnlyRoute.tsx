import { refreshUser } from '@/api/refreshUser'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import type { RootState } from '@/types'
import type { JSX } from 'preact/jsx-runtime'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface PublicOnlyRouteProps {
  redirect?: string
  Component: JSX.Element
}

function PublicOnlyRoute({ redirect = '/', Component }: PublicOnlyRouteProps) {
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
    return <></>
  }

  return isLoggedIn ? <Navigate to={redirect} /> : Component
}

export default PublicOnlyRoute
