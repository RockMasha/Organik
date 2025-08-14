import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { UserSchema } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { handelAppError } from '@/shared/helpers/handelAppError'
import { RedactSchema, type Redact } from '../consts/RedactSchema'

export const redactUser = createAsyncThunk(
  'user/redact',
  async (formData: Redact, thunkApi) => {
    try {
      const parseFormData = RedactSchema.parse(formData)
      const answer = await api
        .patch(ENDPOINTS.user, { json: parseFormData })
        .json()
      const parseResult = UserSchema.parse(answer)
      return parseResult
    } catch (error) {
      const payload = await handelAppError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
