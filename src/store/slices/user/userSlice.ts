import { createSlice } from '@reduxjs/toolkit'
// import {
//   registerUser,
//   loginUser,
//   refreshUser,
//   redactUser,
// } from './userOperations'

const initialState = {
  date: { email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   const handlePending = (state: typeof initialState) => {
  //     state.isLoading = true
  //   }

  //   const handleRejected = (state: typeof initialState) => {
  //     state.isLoading = false
  //     state.isLoggedIn = false
  //   }

  //   const handleAuthFulfilled = (state: typeof initialState, action) => {
  //     state.isLoading = false
  //     state.isLoggedIn = true
  //     state.user.email = action.payload.user.email
  //     state.token = action.payload.token
  //   }

  //   const handleUpdateFulfilled = (state: typeof initialState, action) => {
  //     state.isLoading = false
  //     state.isLoggedIn = true
  //     state.user.email = action.payload.user.email
  //   }

  //   builder
  //     // Реєстрація
  //     .addCase(registerUser.pending, handlePending)
  //     .addCase(registerUser.fulfilled, handleAuthFulfilled)
  //     .addCase(registerUser.rejected, handleRejected)

  //     // Вхід
  //     .addCase(loginUser.pending, handlePending)
  //     .addCase(loginUser.fulfilled, handleAuthFulfilled)
  //     .addCase(loginUser.rejected, handleRejected)

  //     // рефреш
  //     .addCase(refreshUser.pending, handlePending)
  //     .addCase(refreshUser.fulfilled, handleUpdateFulfilled)
  //     .addCase(refreshUser.rejected, handleRejected)

  //     // Редагування
  //     .addCase(redactUser.pending, handlePending)
  //     .addCase(redactUser.fulfilled, handleUpdateFulfilled)
  //     .addCase(redactUser.rejected, handleRejected)
  // },
})

export const userReducer = userSlice.reducer
