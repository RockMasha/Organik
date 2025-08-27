import { Skeleton } from '@/components/ui/skeleton'
import { InfoItem, InfoList, LinksList } from './ProfileList.styled'

function ProductListSkeleton() {
  return (
    <>
      <InfoList>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[40px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[40px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[40px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[40px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
      </InfoList>
      <LinksList>
        <li>
          <Skeleton className="w-25 h-18 rounded-full " />
        </li>
        <li>
          <Skeleton className="w-25 h-18 rounded-full " />
        </li>
        <li>
          <Skeleton className="w-25 h-18 rounded-full " />
        </li>
      </LinksList>
    </>
  )
}

export default ProductListSkeleton
