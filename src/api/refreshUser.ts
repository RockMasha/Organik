import api from './kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { handelAppError } from '@/shared/helpers/handelAppError'
import { UserSchema, type RootState } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState() as RootState
      const token = state.user.token
      if (!token) {
        return thunkApi.rejectWithValue({ message: 'No have token' })
      }
      const data = await api.get(ENDPOINTS.refresh).json()
      const parseResult = UserSchema.parse(data)
      return parseResult
    } catch (error) {
      const payload = await handelAppError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
