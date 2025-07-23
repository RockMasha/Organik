import type { JSX } from 'preact/jsx-runtime'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  redirect?: string
  Component: JSX.Element
}

function PrivateRoute({ redirect = '/login', Component }: PrivateRouteProps) {
  const isLoggedIn = true // чекає cетапу store

  return !isLoggedIn ? <Navigate to={redirect} /> : Component
}

export default PrivateRoute
