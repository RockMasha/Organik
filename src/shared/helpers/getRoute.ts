import type { RouteWithId, RouteWithoutId } from '@/types'
import { ROUTES } from '../consts/ROUTES'
import type { HomeId } from '@/types/modules/routes/HomeId'
import { getSectionId } from './getSectionId'

type GetRoute = {
  (route: RouteWithoutId): string
  (route: RouteWithId, id: number): string
  (route: 'home', id?: HomeId): string
}

export const getRoute: GetRoute = (route, id?) => {
  const point = ROUTES[route]

  if (point.includes(':id')) {
    return point.replace(':id', String(id))
  }

  if (route === 'home') {
    return `${point}${id ? `#${getSectionId(id as HomeId)}` : ''}`
  }

  if (route === 'product') {
    return `/${point}#product-modal`
  }

  return `/${point}`
}
