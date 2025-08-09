import { Button } from '@/components/ui/button'
import { FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import responsiveSizing from '@/styles/shared/resonsiceSizing'
import styled from '@emotion/styled'

export const FormLabelStyled = styled(FormLabel)`
  font-size: ${responsiveSizing(18, 44)};
`
export const InputStyled = styled(Input)`
  height: ${responsiveSizing(36, 80)};
  font-size: ${responsiveSizing(14, 32)};
  color: var(--color-gray-200);
  border-radius: 16px;
  border: 1px solid var(--color-green-200);
`

export const ButtonStyled = styled(Button)`
  width: ${responsiveSizing(160, 400)};
  height: ${responsiveSizing(60, 100)};
  font-size: ${responsiveSizing(14, 40)};
`
