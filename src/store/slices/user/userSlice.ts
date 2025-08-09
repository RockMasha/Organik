import { refreshUser } from '@/api/refreshUser'
import { loginUser } from '@/features/SwitchForm/api/loginUser'
import { registerUser } from '@/features/SwitchForm/api/registerUser'
import type { ResponseUser, User } from '@/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface UserSliceState {
  date: {
    email: string | null
  }
  token: string | null
  isLoggedIn: boolean
  isLoading: boolean
}

const initialState: UserSliceState = {
  date: { email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state: typeof initialState) => {
      state.isLoading = true
    }

    const handleRejected = (state: typeof initialState) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.token = null
    }

    const handleAuthFulfilled = (
      state: typeof initialState,
      action: PayloadAction<ResponseUser>
    ) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.date.email = action.payload.user.email
      state.token = action.payload.token
    }

    const handleUpdateFulfilled = (
      state: typeof initialState,
      action: PayloadAction<User>
    ) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.date.email = action.payload.email
    }

    builder
      // Реєстрація
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleAuthFulfilled)
      .addCase(registerUser.rejected, handleRejected)

      // Вхід
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleAuthFulfilled)
      .addCase(loginUser.rejected, handleRejected)

      // рефреш
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleUpdateFulfilled)
      .addCase(refreshUser.rejected, handleRejected)

    //     // Редагування
    //     .addCase(redactUser.pending, handlePending)
    //     .addCase(redactUser.fulfilled, handleUpdateFulfilled)
    //     .addCase(redactUser.rejected, handleRejected)
  },
})

export const userReducer = userSlice.reducer
