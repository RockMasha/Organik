import { Button } from '@/components/ui/button'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import styled from '@emotion/styled'

export const StyledRegisterLink = styled.a`
  display: block;
  font-family: 'Open Sans';
  font-size: ${responsiveSizing(16, 32)};
  font-weight: 700;
  letter-spacing: 0.36px;
  text-align: center;
  color: var(--color-gray-100);
  position: relative;
  text-decoration: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: var(--color-gray-100);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  span {
    display: block;
    font-family: 'Open Sans';
    font-weight: 100;
  }
`

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
