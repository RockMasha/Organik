import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useProductsPages } from '../contexts/ProductsContext'

export function ProductsPagination() {
  const { page, setPage, totalItems, limit } = useProductsPages()
  const totalPages = Math.ceil(totalItems / limit)
  const isLastPage = page === totalPages
  const isFirstPage = page === 1

  const setPreviousPage = () => {
    setPage((prevValue) => prevValue - 1)
  }

  const setNextPage = () => {
    setPage((prevValue) => prevValue + 1)
  }

  return (
    <>
      {!!totalItems && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={setPreviousPage}
                disabled={isFirstPage}
              />
            </PaginationItem>

            {!isFirstPage && (
              <PaginationItem>
                <PaginationButton onClick={setPreviousPage}>
                  {page - 1}
                </PaginationButton>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationButton isActive>{page}</PaginationButton>
            </PaginationItem>

            {!isLastPage && (
              <PaginationItem>
                <PaginationButton onClick={setNextPage}>
                  {page + 1}
                </PaginationButton>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext onClick={setNextPage} disabled={isLastPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}
