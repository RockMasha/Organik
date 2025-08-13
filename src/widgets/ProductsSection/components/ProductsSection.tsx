import Container from '@/components/ui/Container'
import {
  ProductGreenText,
  ProductTitle,
  Section,
} from './ProductsSection.styled'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import { ProductsPagination } from './ProductsPagination'
import { ProductsList } from './ProductList'
import { Outlet } from 'react-router-dom'
// import ProductDetailsModal from './ProductDetailsModal'

export const Products = Object.assign(ProductsContextProvider, {
  List: ProductsList,
  Pagination: ProductsPagination,
})

function ProductsSection() {
  return (
    <Section id="products">
      <Container>
        <Outlet />
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
