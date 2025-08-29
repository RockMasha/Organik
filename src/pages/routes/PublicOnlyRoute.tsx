import { refreshUser } from '@/api/shared/refreshUser'
import PageLoader from '@/components/modules/PageLoader/PageLoader'
import { getRoute } from '@/shared/helpers/getRoute'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import type { RootState } from '@/types'
import { Suspense, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import type { ComponentType } from 'react'

interface PublicOnlyRouteProps {
  redirect?: string
  Component: ComponentType
}

function PublicOnlyRoute({
  redirect = getRoute('home'),
  Component,
}: PublicOnlyRouteProps) {
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

  return !isLoggedIn ? (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  ) : (
    <Navigate to={redirect} />
  )
}

export default PublicOnlyRoute
