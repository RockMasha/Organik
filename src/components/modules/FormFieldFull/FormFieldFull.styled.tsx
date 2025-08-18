import { FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const FormLabelStyled = styled(FormLabel)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 26px;
  font-size: ${responsiveSizing(16, 18)};
  color: var(--color-navy-100);
`
export const InputStyled = styled(Input)`
  min-width: 100%;
  padding-bottom: ${responsiveSizing(18, 30)};
  padding-top: ${responsiveSizing(18, 30)};
  padding-right: ${responsiveSizing(10, 23)};
  padding-left: ${responsiveSizing(10, 23)};
  font-size: ${responsiveSizing(12, 18)};
  &::placeholder {
    font-size: ${responsiveSizing(14, 16)};
  }
`

export const TextAreaStyled = styled(Textarea)`
  min-width: 100%;
  padding-top: ${responsiveSizing(15, 28)};
  padding-bottom: ${responsiveSizing(15, 28)};
  padding-left: ${responsiveSizing(10, 23)};
  padding-right: ${responsiveSizing(10, 23)};
  height: ${responsiveSizing(50, 247)};
  font-size: ${responsiveSizing(16, 18)};
  &::placeholder {
    font-size: ${responsiveSizing(14, 16)};
  }
`
