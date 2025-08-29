import type { HomeId } from '@/types/modules/routes/HomeId'
import { homeElementsIds } from '../consts/HomeSectionIds'

export function getSectionId(id: HomeId) {
  return homeElementsIds[id]
}
