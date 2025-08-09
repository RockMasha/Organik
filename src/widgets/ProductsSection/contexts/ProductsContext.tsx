import { createContext, useContext, useState, useEffect } from 'react'
import { processingRequestResult } from '@/shared/helpers/processingRequestResult'
import { getProducts } from '@/api/getProducts'
import {
  checkContextConnection,
  type ChildrenProps,
  type Product,
} from '@/types'
import type { SetState } from '@/types/modules/setStates/SetState'

interface ProductsListContextValue {
  products: Product[]
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

const defaultApiData = {
  data: [],
  total: 0,
}

export function ProductsContextProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const limit = 8

  useEffect(() => {
    const setProductsData = async () => {
      const data = processingRequestResult(
        await getProducts({ page, limit }),
        defaultApiData
      )
      if (data) {
        setTotalItems(data.total)
        setProducts(data.data)
      }
    }
    setProductsData()
  }, [page])

  return (
    <ProductsListContext.Provider value={{ products }}>
      <ProductsPagesContext.Provider
        value={{ page, totalItems, setPage, limit }}
      >
        {children}
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
