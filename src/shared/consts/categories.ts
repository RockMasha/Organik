import { getCategories } from '@/api/shared/getCategories'
import { processingRequestResult } from '@/shared/helpers/processingRequestHandlers/processingRequestResult'

export const categories = processingRequestResult(await getCategories()) || []
