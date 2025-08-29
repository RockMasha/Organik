import { useProductsList } from '../contexts/ProductsContext'
import { ProductList } from './ProductsSection.styled'
import { ProductCard, ProductCardSkeleton } from '@/features/ProductCard'

export function ProductsList() {
  const { products, limit } = useProductsList()
  return (
    <ProductList>
      {products.map((item) => (
        <ProductCard variant="link" key={item.id} data={item} />
      ))}
      {products.length === 0 &&
        new Array(limit).fill(0).map((_, i) => <ProductCardSkeleton key={i} />)}
    </ProductList>
  )
}
