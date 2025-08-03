import api from './kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { UserSchema, type RootState } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState() as RootState
      const token = state.user.token
      if (!token) {
        return thunkApi.rejectWithValue('No have token')
      }
      const data = await api.get(ENDPOINTS.refresh).json()
      const parseResult = UserSchema.parse(data)
      return parseResult
    } catch {
      return thunkApi.rejectWithValue('token death')
    }
  }
)
