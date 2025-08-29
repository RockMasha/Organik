import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { UserSchema } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { handelNeverthrowError } from '@/shared/helpers/errorHandlers/handelNeverthrowError'
import { type Redact } from '../consts/RedactSchema'

const getPostData = <T extends Record<string, unknown>>(data: T) => {
  const coupleKeyValueList = Object.entries(data)
  const filterObj = Object.fromEntries(
    coupleKeyValueList.map((property) => {
      if (property[1] !== '') {
        return property
      }
      return [property[0], null]
    })
  )
  return filterObj
}

export const redactUser = createAsyncThunk(
  'user/redact',
  async (formData: Redact, thunkApi) => {
    try {
      const answer = await api
        .patch(ENDPOINTS.user, { json: getPostData(formData) })
        .json()
      const parseResult = UserSchema.parse(answer)
      return parseResult
    } catch (error) {
      const payload = await handelNeverthrowError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)
