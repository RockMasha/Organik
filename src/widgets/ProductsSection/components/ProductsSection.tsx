import Container from '@/components/ui/Container'
import {
  ProductGreenText,
  ProductTitle,
  Section,
} from './ProductsSection.styled'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import { ProductsPagination } from './ProductsPagination'
import { ProductsList } from './ProductList'

export const Products = Object.assign(ProductsContextProvider, {
  List: ProductsList,
  Pagination: ProductsPagination,
})

function ProductsSection() {
  return (
    <Section id="products">
      <Container>
        <ProductGreenText type="green">Categories</ProductGreenText>
        <ProductTitle type="h2">Our Products</ProductTitle>
        <Products>
          <Products.List />
          <Products.Pagination />
        </Products>
      </Container>
    </Section>
  )
}

export default ProductsSection
