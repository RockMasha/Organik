import { CartProductSchema } from '@/types'

import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelAppError } from '@/shared/helpers/errorHandlers/handelAppError'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { CartProductData } from '../types/CartProductData'
import { UserCartSchema } from '@/types/modules/user/UserCart'

export const deleteProductInCartSchema = CartProductSchema.omit({
  id: true,
})

let controller: AbortController | null = null
export const updateProductInCart = createAsyncThunk(
  'cart/change-product',
  async (data: CartProductData, thunkApi) => {
    if (controller) {
      controller.abort()
    }
    controller = new AbortController()
    try {
      const result = await api
        .put(`${ENDPOINTS.cart}`, {
          json: [data],
          signal: controller.signal,
        })
        .json()
      const parseResult = UserCartSchema.parse(result)
      return parseResult
    } catch (error) {
      const payload = await handelAppError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
