// import api from '@/api/kyInstance'
// import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
// import { UserSchema } from '@/types'
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { handelAppError } from '@/shared/helpers/handelAppError'
// import { RedactSchema, type Redact } from '../consts/RedactSchema'
// import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
// import { clearToken } from '@/store/slices/user/userSlice'

// const redactUser = createAsyncThunk(
//   'user/redact',
//   async (formData: Redact, thunkApi) => {
//     try {
//       const parseFormData = RedactSchema.parse(formData)
//       const answer = await api
//         .patch(ENDPOINTS.user, { json: parseFormData })
//         .json()
//       const parseResult = UserSchema.parse(answer)
//       return parseResult
//     } catch (error) {
//       const payload = await handelAppError(error)
//       return thunkApi.rejectWithValue(payload)
//     }
//   }
// )

// export default redactUser
import { HTTPError } from 'ky'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { handelAppError } from '@/shared/helpers/handelAppError'
import { RedactSchema, type Redact } from '../consts/RedactSchema'
import { UserSchema } from '@/types'
import api from '@/api/kyInstance'
import { ENDPOINTS } from '@/shared/consts/ENDPOINTS'
import { clearToken } from '@/store/slices/user/userSlice'

const redactUser = createAsyncThunk(
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
      if (error instanceof HTTPError && error.response.status === 401) {
        thunkApi.dispatch(clearToken())
      }
      const payload = await handelAppError(error)
      return thunkApi.rejectWithValue(payload)
    }
  }
)

export default redactUser
