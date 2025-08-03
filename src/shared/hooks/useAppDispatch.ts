import type { AppDispatch } from '@/types/modules/AppDispatch'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
