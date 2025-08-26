import {
  deleteProductInCart,
  updateProductInCart,
} from '@/features/CartProduct'
import type { Cart } from '@/types'
import { getCart } from '@/widgets/CartOrders/api/getCart'
import { createSlice } from '@reduxjs/toolkit'

interface CartSliceState {
  cart: Cart | null
}

const initialState: CartSliceState = {
  cart: null,
}

const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = null
    },
  },
  extraReducers: (builder) => {
    builder
      // get cart
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload
      })

      // delete product in cart
      .addCase(deleteProductInCart.fulfilled, (state, action) => {
        if (!state.cart) return
        const index = state.cart.products.findIndex(
          (item) => item.id === action.payload.product.id
        )
        state.cart.products.splice(index, 1)
      })

      // change product quality in cart
      .addCase(updateProductInCart.fulfilled, (state, action) => {
        if (!state.cart || !action.payload.cartItems) return
        state.cart.products = action.payload.cartItems
      })
  },
})

export const { clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
