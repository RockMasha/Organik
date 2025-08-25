import { Skeleton } from '@/components/ui/skeleton'
import { ItemTextBox, OrderItem } from './OrderHistorySection.styled'

function HistoryOrderItemSkeleton() {
  return (
    <OrderItem>
      {/* id */}
      <Skeleton
        className="
          h-[20px] w-[40px] mb-2
          tablet:h-[28px] tablet:w-[50px] tablet:mb-4
          laptop:h-[32px] laptop:w-[60px] laptop:mb-6
        "
      />

      {/* price */}
      <Skeleton
        className="
          h-[18px] w-[100px] mb-2
          tablet:h-[22px] tablet:w-[140px] tablet:mb-4
          laptop:h-[26px] laptop:w-[180px] laptop:mb-6
          
        "
      />

      {/* text box (name, email, phone, address) */}
      <ItemTextBox>
        <Skeleton className="h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px] " />
        <Skeleton className="h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px]" />
        <Skeleton className="h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px]" />
        <Skeleton className="h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px]" />
      </ItemTextBox>

      {/* date */}
      <Skeleton
        className="
          h-[14px] w-[80px] ml-auto
          tablet:h-[18px] tablet:w-[130px]
          laptop:h-[20px] laptop:w-[150px]
        "
      />
    </OrderItem>
  )
}

export default HistoryOrderItemSkeleton
