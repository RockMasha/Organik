import { Skeleton } from '@/components/ui/skeleton'
import {
  MainContentBox,
  Modal,
  ModalCartForm,
  ModalCartLabel,
  ModalContainer,
  ModalImageBox,
  ModalPriceBox,
  ModalWrapper,
} from './ProductModal.styled'

function ProductModalSkeleton() {
  return (
    <ModalWrapper>
      <Modal id="product-modal">
        <ModalContainer>
          <Skeleton className="absolute right-5 top-0 w-[50px] h-[40px] rounded-xl tablet:top-2 tablet:right-20 laptop:right-50 laptop:top-5 desktop:top-10 desktop:right-70" />
          <ModalImageBox>
            {/* category */}
            <Skeleton className="absolute top-[30px] left-[20px] w-[80px] h-[30px] rounded-full" />
            {/* image */}
            <Skeleton className="w-[250px] h-[250px] rounded-[30px] tablet:w-[300px] tablet:h-[300px] laptop:w-[475px] laptop:h-[475px] desktop:w-[600px] desktop:h-[600px]" />
          </ModalImageBox>
          <MainContentBox className="w-full">
            {/* title */}
            <Skeleton className="h-[32px] w-[40%] mb-2 rounded" />
            {/* star rate */}
            <Skeleton className="h-[20px] w-[120px] mb-3 rounded" />
            <ModalPriceBox>
              {/* old price */}
              <Skeleton className="h-[28px] w-[50px] rounded" />
              {/* new price */}
              <Skeleton className="h-[28px] w-[60px] rounded" />
            </ModalPriceBox>
            {/* main text*/}
            <Skeleton className="h-[60px] w-full mb-4 rounded tablet:w-[50%]" />
            <ModalCartForm>
              <ModalCartLabel className="w-[40%]">
                {/* quantity text */}
                <Skeleton className="h-[24px] w-[45%] rounded tablet:h-[35px]" />
                {/* quantity input */}
                <Skeleton className="h-[48px] w-[45%] rounded tablet:h-[70px] laptop:h-[82px]" />
              </ModalCartLabel>
              {/* add to cart button */}
              <Skeleton className="h-[48px] w-[35%] rounded tablet:h-[70px] tablet:w-[30%] laptop:h-[82px]" />
            </ModalCartForm>
            {/* In your cart  */}
            <Skeleton className="h-[24px] w-[160px] rounded mt-[30px]" />
          </MainContentBox>
        </ModalContainer>
      </Modal>
    </ModalWrapper>
  )
}

export default ProductModalSkeleton
