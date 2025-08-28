import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

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
  Link {
    display: block;
    font-family: 'Open Sans';
    font-weight: 100;
  }
`

export const AuthBtn = styled(Button)`
  margin-bottom: ${responsiveSizing(15, 35)};
`

export const RegisterLinkText = styled.p`
  font-size: ${responsiveSizing(14, 28)};
  font-weight: 500;
  letter-spacing: 0.36px;
  text-align: center;
  color: var(--color-grey-100);
  position: relative;
`

export const RegisterLink = styled(Link)`
  font-size: ${responsiveSizing(14, 28)};
  font-weight: 700;
  letter-spacing: 0.36px;
  text-align: center;
  color: var(--color-navy-100);
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid var(--color-navy-100);
  border-bottom-width: ${responsiveSizing(3, 4)};
  transition:
    border-bottom-color 0.3s,
    color 0.3s;
  :hover {
    color: var(--color-green-200);
    border-bottom-color: var(--color-green-200);
  }
`
