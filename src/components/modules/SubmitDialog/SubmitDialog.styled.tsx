import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${responsiveSizing(20, 100)};
  padding: ${responsiveSizing(20, 100)};
  background-color: var(--color-white-100);
  border-radius: 20px;
`

export const ActionBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`
