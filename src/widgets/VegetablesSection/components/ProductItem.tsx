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

export const ProductItemInner = ({
  name,
  prevPrice,
  currentPrice,
  type,
  picture,
}) => {
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
