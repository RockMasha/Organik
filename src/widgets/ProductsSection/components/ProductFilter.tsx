import { categories } from '@/shared/consts/categories'
import { useProductsFilters } from '../contexts/ProductsContext'
import { ProductFilterList } from './ProductsSection.styled'
import { Badge } from '@/components/ui/badge'

function ProductFilter() {
  const { activeCategories, setActiveCategories } = useProductsFilters()

  const toggleActive = (name: string) => {
    const index = activeCategories.indexOf(name)
    if (index === -1) {
      setActiveCategories((prevState) => {
        const newList = [...prevState]
        newList.push(name)
        return newList
      })
    } else {
      setActiveCategories((prevState) => {
        const newList = [...prevState]
        newList.splice(index, 1)
        return newList
      })
    }
  }

  return (
    <ProductFilterList>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <Badge
            onClick={() => toggleActive(name)}
            variant={
              activeCategories.some((activeName) => activeName === name)
                ? 'blue'
                : 'transparent'
            }
            size="md"
          >
            {name}
          </Badge>
        </li>
      ))}
    </ProductFilterList>
  )
}

export default ProductFilter
