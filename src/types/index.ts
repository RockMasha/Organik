// api
export type { AppError } from './api/AppError'
export type { RequestResponse } from './api/RequestResponse'

// product
export { ProductSchema, type Product } from './modules/product/Product'
export { CategorySchema, type Category } from './modules/product/Category'

// user
export { UserSchema, type User } from './modules/user/User'
export {
  ResponseUserSchema,
  type ResponseUser,
} from './modules/user/ResponseUser'

// cart
export { CartSchema, type Cart } from './modules/cart/Cart'
export { CartProductSchema, type CartProduct } from './modules/cart/CartProduct'

// order
export { OrderSchema, type Order } from './modules/order/Order'

// elements
export type { NullableElement } from './modules/elements/NullableElement'

// routes
export type { Routes } from './modules/routes/Routes'
export type { RouteWithoutId } from './modules/routes/RouteWithoutId'
export type { RouteWithId } from './modules/routes/RouteWithId'

// store
export type { AppDispatch } from './modules/store/AppDispatch'
export type { RootState } from './modules/store/RootState'

// guards
export { isCategory } from './guards/isCategory'
export { includesLiteral } from './guards/includesLiteral'
export { checkContextConnection } from './guards/checkContextConnection'

// other
export type { Image } from './modules/Image'
export type { ChildrenProps } from './modules/ChildrenProps'
export type { SetState } from './modules/SetState'
