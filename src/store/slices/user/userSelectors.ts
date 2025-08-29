import type { RootState } from '@/types'

export const selectUser = (state: RootState) => state.user.date
export const selectToken = (state: RootState) => state.user.token
export const selectLoggedIn = (state: RootState) => state.user.isLoggedIn
export const selectIsLoading = (state: RootState) => state.user.isLoading
