import Container from '@/components/ui/Container'
import {
  ProductItem,
  ProductList,
  StyledButton,
  StyledSection,
  StyledText,
  StyledTitle,
} from './VegetablesSection.styled'
import { ProductItemInner } from './ProductItem'

function VegetablesSection() {
  return (
    <StyledSection id="testimonial">
      <Container>
        <StyledText>Offer Products</StyledText>
        <StyledTitle type="h2">We Offer Organic for You</StyledTitle>
        <StyledButton arrow={true}>View All products</StyledButton>
        <ProductList>
          <ProductItem>
            <ProductItemInner
              name="Organic Almonds"
              prevPrice="$ 14.00"
              currentPrice="$ 9.37"
              type="Vegetable"
              picture="tomatoes"
            />
          </ProductItem>
          <ProductItem>
            <ProductItemInner
              name="Vegan Red Tomato"
              prevPrice="$ 18.00"
              currentPrice="$ 9.37"
              type="Fruits"
              picture="tomatoes"
            />
          </ProductItem>
          <ProductItem>
            <ProductItemInner
              name="Fresh Corn"
              prevPrice="$ 21.23"
              currentPrice="$ 18.00"
              type="Vegetable"
              picture="tomatoes"
            />
          </ProductItem>
        </ProductList>
      </Container>
    </StyledSection>
  )
}

export default VegetablesSection
