import StarRate from '@/components/modules/StarRate/StarRate'
import {
  ProductBadge,
  ProductImg,
  ProductItem,
  ProductOldPrice,
  ProductPrice,
  ProductPriceBox,
  ProductTitle,
  ProductValueContainer,
} from './ProductCard.styled'
import responsiveSizing from '@/styles/helpers/resonsiceSizing'
import type { Product } from '@/types'
import { getPriceWithDiscount } from '../helpers/getPriceWithDiscount'

function ProductCard({ data }: { data: Product }) {
  const { id, name, price, discount, img, rate, category } = data

  return (
    <ProductItem data-id={id}>
      <ProductBadge>{category.name}</ProductBadge>
      <ProductImg src={img} />
      <ProductTitle type="h4">{name}</ProductTitle>
      <ProductValueContainer>
        <ProductPriceBox>
          {discount !== 0 && (
            <ProductOldPrice>
              ${getPriceWithDiscount(price, discount)}
            </ProductOldPrice>
          )}
          <ProductPrice>${price}</ProductPrice>
        </ProductPriceBox>
        <StarRate rating={rate} size={responsiveSizing(16, 20)} />
      </ProductValueContainer>
    </ProductItem>
  )
}

export default ProductCard

// ""
