import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelAppError } from '@/shared/helpers/errorHandlers/handelAppError'
import { CartSchema } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCart = createAsyncThunk('cart/get', async (_, thunkApi) => {
  try {
    const data = await api.get(ENDPOINTS.cart).json()
    const parseResult = CartSchema.parse(data)
    return parseResult
  } catch (error) {
    const payload = await handelAppError(error)
    return thunkApi.rejectWithValue(payload)
  }
})
