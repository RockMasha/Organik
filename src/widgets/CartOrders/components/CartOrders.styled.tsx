import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Section = styled.section`
  padding-top: ${responsiveSizing(50, 150)};
  padding-bottom: ${responsiveSizing(20, 50)};
  background-color: var(--color-yellow-200);
`

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 46px;
`

export const TotalPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: ${responsiveSizing(10, 32)};
  margin-bottom: ${responsiveSizing(50, 100)};
`

export const TotalPriceText = styled.p`
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(20, 40)};
  font-weight: 700;
`
