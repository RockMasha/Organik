import type { JSX } from 'preact/jsx-runtime'
import { Navigate } from 'react-router-dom'

interface PublicOnlyRouteProps {
  redirect?: string
  Component: JSX.Element
}

function PublicOnlyRoute({ redirect = '/', Component }: PublicOnlyRouteProps) {
  const isLoggedIn = true // чекає cетапу store

  return isLoggedIn ? <Navigate to={redirect} /> : Component
}

export default PublicOnlyRoute
