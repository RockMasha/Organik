// OrderProductSkeleton.tsx
import {
  ProductItem,
  ProductContentBox,
  ProductDataBox,
  ProductPriceBox,
  ProductQualityLabel,
} from './CartProduct.styled'
import { Skeleton } from '@/components/ui/skeleton'

function OrderProductSkeleton() {
  return (
    <ProductItem>
      {/* image */}
      <Skeleton
        className="
          w-[200px] h-[200px]
          tablet:w-[292px] tablet:h-[226px]
          rounded-2xl bg-gray-200
        "
      />

      <ProductContentBox>
        <ProductDataBox>
          {/* title */}
          <Skeleton
            className="
              h-[30px] w-[140px]
              tablet:h-[32px] tablet:w-[200px]
              laptop:h-[55px] laptop:w-[260px]
            "
          />

          <ProductPriceBox>
            {/* old price */}
            <Skeleton
              className="
                h-[16px] w-[25px]
                tablet:h-[22px] tablet:w-[35px]
                laptop:h-[30px] laptop:w-[45px]
              "
            />
            {/* new price */}
            <Skeleton
              className="
                h-[18px] w-[30px]
                tablet:h-[28px] tablet:w-[40px]
                laptop:h-[40px] laptop:w-[55px]
              "
            />
          </ProductPriceBox>
        </ProductDataBox>

        <ProductQualityLabel className="tablet:mt-5 laptop:mb-0">
          {/* quantity label  */}
          <Skeleton
            className="
              h-[20px] w-[90px]
              tablet:h-[28px] tablet:w-[120px]
              laptop:h-[32px] laptop:w-[120px]
            "
          />
          {/* quantity input  */}
          <Skeleton
            className="
              h-[50px] w-[60px]
              tablet:h-[60px] tablet:w-[120px]
              laptop:h-[60px] laptop:w-[120px]
              desktop:h-[80px] desktop:w-[120px]
              
            "
          />
        </ProductQualityLabel>
      </ProductContentBox>

      {/* delete button */}
      <Skeleton
        className="
          absolute h-[35px] w-[35px] rounded-lg top-0 right-0
          min-[500px]:top-[50%] min-[500px]:translate-y-[-50%]
          tablet:h-[40px] tablet:w-[40px]  
          laptop:h-[50px] laptop:w-[50px] laptop:static
          desktop:translate-x-[200%]
        "
      />
    </ProductItem>
  )
}

export default OrderProductSkeleton
