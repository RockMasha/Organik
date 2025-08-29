import { Skeleton } from '@/components/ui/skeleton'
import { InfoItem, InfoList, LinksList } from './ProfileList.styled'

function ProductListSkeleton() {
  return (
    <>
      <InfoList>
        {new Array(4).fill(0).map((_, index) => (
          <InfoItem key={index}>
            <Skeleton
              className="
          w-[100%] h-[50px]
          rounded-2xl bg-gray-200
        "
            />
          </InfoItem>
        ))}
      </InfoList>
      <LinksList>
        {new Array(4).fill(0).map((_, index) => (
          <li key={index}>
            <Skeleton className="h-[60px] w-[130px] tablet:h-[80px] tablet:w-[170px] rounded-[25px] " />
          </li>
        ))}
      </LinksList>
    </>
  )
}

export default ProductListSkeleton
