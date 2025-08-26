import StarRate from '@/components/modules/StarRate/StarRate'
import {
  ProductBadge,
  ProductImg,
  ProductItem,
  ProductPriceBox,
  ProductTitle,
  ProductValueContainer,
} from './ProductCard.styled'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import type { Product } from '@/types'
import { getPriceWithDiscount } from '@/shared/helpers/getPriceWithDiscount'
import PriceText from '@/components/ui/PriceText'
import { Link } from 'react-router-dom'
import { getRoute } from '@/shared/helpers/getRoute'

type CardVariant = 'item' | 'link'

interface ProductCardProps {
  data: Product
  variant?: CardVariant
}

function ProductCard({ data, variant }: ProductCardProps) {
  return (
    <ProductItem data-id={data.id}>
      {(variant === 'item' || !variant) && <ProductCardInner data={data} />}
      {variant === 'link' && (
        <Link to={getRoute('product', data.id)}>
          <ProductCardInner data={data} />
        </Link>
      )}
    </ProductItem>
  )
}

function ProductCardInner({ data }: { data: Product }) {
  const { name, price, discount, img, rate, category } = data

  return (
    <>
      <ProductBadge>{category.name}</ProductBadge>
      <ProductImg src={img} />
      <ProductTitle type="h4">{name}</ProductTitle>
      <ProductValueContainer>
        <ProductPriceBox>
          <PriceText minWidth={15} maxWidth={15}>
            {discount !== 0
              ? `$${getPriceWithDiscount(price, discount)}`
              : `$${price}`}
          </PriceText>
          {discount !== 0 && (
            <PriceText type="crossed" minWidth={18} maxWidth={18}>
              ${price}
            </PriceText>
          )}
        </ProductPriceBox>
        <StarRate rating={rate} size={responsiveSizing(16, 20)} />
      </ProductValueContainer>
    </>
  )
}

export default ProductCard
