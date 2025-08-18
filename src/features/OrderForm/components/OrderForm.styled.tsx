import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const OrderFormList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: ${responsiveSizing(26, 46)};
  margin-bottom: ${responsiveSizing(26, 46)};
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const InputItem = styled.li`
  @media (min-width: 768px) and (max-width: 1919px) {
    min-width: ${responsiveSizing(300, 800, 768)};
  }
  @media (min-width: 1920px) {
    min-width: 569px;
  }
`

export const TextAreaItem = styled.li`
  width: 100%;
`
