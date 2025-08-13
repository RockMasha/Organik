import type { RouteWithId, RouteWithoutId } from '@/types'
import { ROUTES } from '../consts/ROUTES'

type GetRoute = {
  (route: RouteWithoutId, id?: number): string
  (route: RouteWithId, id: number): string
}

export const getRoute: GetRoute = (route: keyof typeof ROUTES, id?: number) => {
  const point = ROUTES[route] !== '/' ? ROUTES[route] : ''

  if (point.includes(':id')) {
    return point.replace(':id', String(id))
  }

  return `/${point}`
}
