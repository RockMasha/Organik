import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import LogoIcon from '@/assets/icons/logo.svg?react'
import responsiveSizing from '@/styles/helpers/responsiveSizing'

export const StyledLink = styled(Link)`
  display: flex;
  gap: ${responsiveSizing(6, 8.2)};
  text-align: center;
  align-items: center;
`

export const StyledIcon = styled(LogoIcon)`
  width: ${responsiveSizing(34, 37)};
  height: ${responsiveSizing(45, 53)};
  path {
    stroke: var(--color-green-200);
  }
`

export const StyledText = styled.h1`
  color: var(--color-navy-100);
  font-size: ${responsiveSizing(34, 38)};
  font-weight: 700;
`
