import { useProductsList } from '../contexts/ProductsContext'
import { ProductList } from './ProductsSection.styled'
import { ProductCard } from '@/features/ProductCard'

export function ProductsList() {
  const { products } = useProductsList()
  return (
    <ProductList>
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </ProductList>
  )
}
