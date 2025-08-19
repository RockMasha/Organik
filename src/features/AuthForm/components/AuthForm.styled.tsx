import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${responsiveSizing(16, 32)};
  margin-bottom: ${responsiveSizing(16, 32)};
`

export const FormItem = styled.li`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 500px) {
    width: ${responsiveSizing(300, 500, 500)};
  }
  @media (min-width: 1920px) {
    width: 569px;
  }
`

export const AuthBtn = styled(Button)`
  margin-bottom: ${responsiveSizing(15, 25)};
`
