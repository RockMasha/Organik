import {
  deleteProductInCart,
  updateProductInCart,
} from '@/features/CartProduct'
import type { Cart } from '@/types'
import { getCart } from '@/widgets/CartOrders'
import { createSlice } from '@reduxjs/toolkit'

interface CartSliceState {
  cart: Cart | null
  isLoading: boolean
}

const initialState: CartSliceState = {
  cart: null,
  isLoading: false,
}

const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state: CartSliceState) => {
      state.isLoading = true
    }

    const handleRejected = (state: CartSliceState) => {
      state.isLoading = false
    }

    builder
      // get cart
      .addCase(getCart.pending, handlePending)
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload
        state.isLoading = false
      })
      .addCase(getCart.rejected, handleRejected)

      // delete product in cart
      .addCase(deleteProductInCart.pending, handlePending)
      .addCase(deleteProductInCart.fulfilled, (state, action) => {
        state.isLoading = false
        if (!state.cart) return
        const index = state.cart.products.findIndex(
          (item) => item.id === action.payload.product.id
        )
        state.cart.products.splice(index, 1)
      })
      .addCase(deleteProductInCart.rejected, handleRejected)

      // change product quality in cart
      .addCase(updateProductInCart.pending, handlePending)
      .addCase(updateProductInCart.fulfilled, (state, action) => {
        state.isLoading = false
        if (!state.cart || !action.payload.cartItems) return
        state.cart.products = action.payload.cartItems
      })
      .addCase(updateProductInCart.rejected, handleRejected)
  },
})

export const cartReducer = cartSlice.reducer
