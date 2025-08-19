import PriceText from '@/components/ui/PriceText'
import {
  ProductContentBox,
  ProductDataBox,
  ProductImage,
  ProductItem,
  ProductPriceBox,
  ProductTitle,
} from './CartProduct.styled'
import QuantityForm from './QuantityForm'
import type { CartProduct } from '@/types'
import { getPriceWithDiscount } from '@/shared/helpers/getPriceWithDiscount'
import DeleteItemBtn from './DeleteItemBtn'

interface OrderProductProps {
  data: CartProduct
}

function OrderProduct({ data }: OrderProductProps) {
  const {
    quantity,
    id,
    product: { name, price, discount, img },
  } = data

  return (
    <ProductItem>
      <ProductImage src={img} />
      <ProductContentBox>
        <ProductDataBox>
          <ProductTitle type="h2">{name}</ProductTitle>
          <ProductPriceBox>
            {discount !== 0 && (
              <PriceText type="crossed" minWidth={16} maxWidth={24}>
                ${price}
              </PriceText>
            )}
            <PriceText minWidth={18} maxWidth={40}>
              {discount !== 0
                ? `$${getPriceWithDiscount(price, discount)}`
                : `$${price}`}
            </PriceText>
          </ProductPriceBox>
        </ProductDataBox>
        <QuantityForm id={data.product.id} quantity={quantity} />
      </ProductContentBox>
      <DeleteItemBtn id={id} name={name} />
    </ProductItem>
  )
}

export default OrderProduct
