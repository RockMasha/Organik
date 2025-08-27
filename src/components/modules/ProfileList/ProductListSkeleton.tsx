import { Skeleton } from '@/components/ui/skeleton'
import { InfoItem, InfoList, LinksList } from './ProfileList.styled'

function ProductListSkeleton() {
  return (
    <>
      <InfoList>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[50px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[50px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[50px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
        <InfoItem>
          <Skeleton
            className="
          w-[100%] h-[50px]
          rounded-2xl bg-gray-200
        "
          />
        </InfoItem>
      </InfoList>
      <LinksList>
        <li>
          <Skeleton className="h-[80px] w-[170px] rounded-[25px] " />
        </li>
        <li>
          <Skeleton className="h-[80px] w-[130px] rounded-[25px] " />
        </li>
        <li>
          <Skeleton className="h-[80px] w-[175px] rounded-[25px] " />
        </li>
      </LinksList>
    </>
  )
}

export default ProductListSkeleton
