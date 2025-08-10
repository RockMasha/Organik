import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { ResponseUserSchema } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserRegisterSchema, type UserRegister } from '../consts/userChema'
import { handelAppError } from '@/shared/helpers/handelAppError'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData: UserRegister, thunkApi) => {
    try {
      const parseFormData = UserRegisterSchema.parse(formData)
      const answer = await api
        .post(ENDPOINTS.auth, { json: parseFormData })
        .json()
      const parseResult = ResponseUserSchema.parse(answer)
      return parseResult
    } catch (error) {
      const payload = await handelAppError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
