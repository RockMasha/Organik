import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { ResponseUserSchema } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserRegisterSchema, type UserRegister } from '../consts/userConsts'
import { handelStringError } from '@/shared/helpers/handleStringError'

export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData: UserRegister, thunkApi) => {
    try {
      const parseFormData = UserRegisterSchema.parse(formData)
      const answer = await api
        .post(ENDPOINTS.user, { json: parseFormData })
        .json()
      const parseResult = ResponseUserSchema.parse(answer)
      return parseResult
    } catch (error) {
      const payload = await handelStringError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
