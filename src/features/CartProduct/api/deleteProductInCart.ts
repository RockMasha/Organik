import { CartProductSchema } from '@/types'
import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelAppError } from '@/shared/helpers/errorHandlers/handelAppError'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const deleteProductInCartSchema = CartProductSchema.omit({
  id: true,
})

export const deleteProductInCart = createAsyncThunk(
  'cart/delete-product',
  async (id: number, thunkApi) => {
    try {
      const result = await api.delete(`${ENDPOINTS.cart}/${id}`).json()
      const parseResult = deleteProductInCartSchema.parse(result)
      return parseResult
    } catch (error) {
      const payload = await handelAppError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
