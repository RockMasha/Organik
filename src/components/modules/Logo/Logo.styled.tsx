import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import LogoIcon from '@/assets/icons/logo.svg?react'

export const StyledLink = styled(Link)`
  display: flex;
  gap: 8.2px;
  text-align: center;
  align-items: center;
`

export const StyledIcon = styled(LogoIcon)`
  width: 37px;
  height: 53px;
  path {
    stroke: #7eb693;
  }
`

export const StyledText = styled.h1`
  color: #274c5b;
  font-size: 38px;
  font-weight: 700;
`
