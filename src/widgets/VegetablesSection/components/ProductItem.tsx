import PriceText from '@/components/ui/PriceText'
import {
  ProductBadge,
  ProductImg,
  ProductPriceBox,
  ProductTitle,
  ProductValueContainer,
} from './VegetablesSection.styled'
import StarRate from '@/components/modules/StarRate/StarRate'
import responsiveSizing from '@/styles/helpers/responsiveSizing'

type Product = {
  name: string
  prevPrice: string
  currentPrice: string
  type: string
  picture: string
}

export const ProductItemInner = ({
  name,
  prevPrice,
  currentPrice,
  type,
  picture,
}: Product) => {
  return (
    <>
      <ProductBadge>{type}</ProductBadge>
      <ProductImg name={picture} />
      <ProductTitle type="h4">{name}</ProductTitle>
      <ProductValueContainer>
        <ProductPriceBox>
          <PriceText minWidth={15} maxWidth={15}>
            {prevPrice}
          </PriceText>
          <PriceText type="crossed" minWidth={18} maxWidth={18}>
            {currentPrice}
          </PriceText>
        </ProductPriceBox>
        <StarRate rating={5} size={responsiveSizing(16, 20)} />
      </ProductValueContainer>
    </>
  )
}
