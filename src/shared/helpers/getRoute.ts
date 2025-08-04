import { ROUTES } from '../consts/ROUTES'

type RouteWithId = {
  [K in keyof typeof ROUTES]: (typeof ROUTES)[K] extends `${infer _Start}:id${infer _End}`
    ? K
    : never
}[keyof typeof ROUTES]

type RouteWithoutId = {
  [K in keyof typeof ROUTES]: (typeof ROUTES)[K] extends `${infer _Start}:id${infer _End}`
    ? never
    : K
}[keyof typeof ROUTES]

type GetRoute = {
  (route: RouteWithoutId, id?: number): string
  (route: RouteWithId, id: number): string
}

export const getRoute: GetRoute = (route: keyof typeof ROUTES, id?: number) => {
  const point = ROUTES[route]

  if (point.includes(':id')) {
    return point.replace(':id', String(id))
  }

  return `/${point}`
}
