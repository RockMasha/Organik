import { createContext, useContext, useState, useEffect } from 'react'
import { processingRequestResult } from '@/shared/helpers/processingRequestResult'
import {
  checkContextConnection,
  type ChildrenProps,
  type Product,
} from '@/types'
import type { SetState } from '@/types/modules/setStates/SetState'
import { getProducts } from '../api/getProducts'

interface ProductsListContextValue {
  products: Product[]
  limit: number
}

const ProductsListContext = createContext<ProductsListContextValue | null>(null)

interface ProductsPagesContextValue {
  page: number
  totalItems: number
  setPage: SetState<number>
  limit: number
}

const ProductsPagesContext = createContext<ProductsPagesContextValue | null>(
  null
)

interface ProductsFiltersContextValue {
  activeCategories: string[]
  setActiveCategories: SetState<string[]>
}

const ProductsFiltersContext =
  createContext<ProductsFiltersContextValue | null>(null)

const defaultApiData = {
  data: [],
  total: 0,
}

export function ProductsContextProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const limit = 8

  useEffect(() => {
    const setProductsData = async () => {
      const data = processingRequestResult(
        await getProducts({
          page,
          limit,
          category: activeCategories.join(','),
        }),
        defaultApiData
      )
      if (data) {
        setTotalItems(data.total)
        setProducts(data.data)
      }
    }
    setProductsData()
  }, [page, activeCategories])

  return (
    <ProductsListContext.Provider value={{ products, limit }}>
      <ProductsPagesContext.Provider
        value={{ page, totalItems, setPage, limit }}
      >
        <ProductsFiltersContext.Provider
          value={{ activeCategories, setActiveCategories }}
        >
          {children}
        </ProductsFiltersContext.Provider>
      </ProductsPagesContext.Provider>
    </ProductsListContext.Provider>
  )
}

export const useProductsList = () => {
  const context = useContext(ProductsListContext)
  return checkContextConnection(context)
}

export const useProductsPages = () => {
  const context = useContext(ProductsPagesContext)
  return checkContextConnection(context)
}

export const useProductsFilters = () => {
  const context = useContext(ProductsFiltersContext)
  return checkContextConnection(context)
}
