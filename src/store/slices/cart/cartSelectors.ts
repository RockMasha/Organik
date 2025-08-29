import type { RootState } from '@/types'

export const selectCart = (state: RootState) => state.cart.cart
