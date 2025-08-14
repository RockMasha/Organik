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
