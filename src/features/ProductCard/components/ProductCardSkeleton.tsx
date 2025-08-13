import {
  ProductItem,
  ProductPriceBox,
  ProductValueContainer,
} from './ProductCard.styled'
import { Skeleton } from '@/components/ui/skeleton'

function ProductCardSkeleton() {
  return (
    <ProductItem>
      {/* badge */}
      <Skeleton className="ml-[14px] mb-[20px] w-[50px] h-[20px] rounded-full" />
      {/* image */}
      <Skeleton className="w-[250px] h-[250px] rounded-[30px] tablet:w-[280px] tablet:h-[280px] desktop:w-[310px] desktop:h-[310px]" />
      {/* title */}
      <Skeleton className="mx-[14px] mt-4 mb-[6px] h-[28px] rounded" />
      <ProductValueContainer>
        <ProductPriceBox>
          {/* price with discount */}
          <Skeleton className="w-[50px] h-[28px] rounded" />
          {/* price */}
          <Skeleton className="w-[50px] h-[28px] rounded" />
        </ProductPriceBox>
        {/* star rite */}
        <Skeleton className="w-[80px] h-[20px] rounded" />
      </ProductValueContainer>
    </ProductItem>
  )
}

export default ProductCardSkeleton
