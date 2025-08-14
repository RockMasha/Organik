import { getCategories } from '@/api/getCategories'
import { processingRequestResult } from '@/shared/helpers/processingRequestHandlers/processingRequestResult'

export const categories = processingRequestResult(await getCategories()) || []
