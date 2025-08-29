import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const ProductItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${responsiveSizing(15, 42)};
  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`

export const ProductImage = styled.img`
  width: ${responsiveSizing(200, 292)};
  height: ${responsiveSizing(200, 226)};
  background-color: var(--color-yellow-300);
  border-radius: ${responsiveSizing(10, 20)};
`

export const ProductContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: start;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ProductDataBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${responsiveSizing(10, 20)};
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ProductTitle = styled.h3`
  font-size: ${responsiveSizing(22, 40)};
  color: var(--color-navy-100);
  font-weight: 600;
`

export const ProductPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${responsiveSizing(7, 14)};
`

export const ProductQualityLabel = styled.label`
  position: relative;
  align-items: center;
  display: flex;
  gap: ${responsiveSizing(10, 22)};
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(20, 32)};
  font-weight: 700;
  white-space: nowrap;
`

export const ProductQualityInput = styled('input')<{ symbolNumb: number }>`
  width: ${({ symbolNumb }) => {
    const maxSymbol = Math.max(symbolNumb, 1)
    return `${Math.min(maxSymbol, 3)}ch`
  }};
  padding-top: ${responsiveSizing(12, 28)};
  padding-bottom: ${responsiveSizing(12, 28)};
  padding-left: ${responsiveSizing(12, 60)};
  padding-right: ${responsiveSizing(12, 60)};
  box-sizing: content-box;
  font-size: ${responsiveSizing(14, 20)};
  border: 2px solid var(--color-navy-100);
  background-color: var(--color-white-100);
  border-radius: 16px;
`

export const ProductDeleteBtn = styled(Button)`
  padding-top: ${responsiveSizing(6, 12)};
  padding-bottom: ${responsiveSizing(6, 12)};
  padding-left: ${responsiveSizing(12, 26)};
  padding-right: ${responsiveSizing(12, 26)};
  font-size: ${responsiveSizing(14, 20)};
  border-radius: 16px;
  @media (max-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    @media (min-width: 500px) {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  @media (min-width: 1920px) {
    position: absolute;
    right: 0;
    transform: translateX(200%);
  }
`
