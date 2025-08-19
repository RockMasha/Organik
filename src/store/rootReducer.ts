import { combineReducers } from 'redux'
import { userReducer } from './slices/user/userSlice'
import { cartReducer } from './slices/cart/cartSlice'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default rootReducer
