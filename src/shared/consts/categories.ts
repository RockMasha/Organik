import { getCategories } from '@/api/getCategories'
import { processingRequestResult } from '../helpers/processingRequestResult'

export const categories = processingRequestResult(await getCategories()) || []
