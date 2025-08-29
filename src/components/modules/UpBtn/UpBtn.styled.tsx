import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const UpBtnStyled = styled(Button)`
  position: fixed;
  bottom: ${responsiveSizing(5, 10)};
  right: ${responsiveSizing(5, 10)};
  padding: ${responsiveSizing(18, 30)};
  font-size: ${responsiveSizing(18, 30)};
  border: 2px solid var(--color-gray-700);
  border-radius: 18px;

  svg {
    transform: rotate(-90deg);
    min-height: ${responsiveSizing(18, 30)};
    min-width: ${responsiveSizing(18, 30)};
  }
`
