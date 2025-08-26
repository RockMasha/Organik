import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import CartIcon from '@/assets/icons/cart-icon.svg?react'
import AccountIcon from '@/assets/icons/account.svg?react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { NavLink } from 'react-router-dom'
import responsiveSizing from '@/styles/helpers/responsiveSizing'
import { LinkButton } from '@/components/ui/button'

export const StyledHeader = styled.header`
  padding: 20px 0;
  @media (min-width: 768px) {
    padding: 30px 0;
  }
  @media (min-width: 1440px) {
    padding: 40px 0;
  }
  @media (min-width: 1920px) {
    padding: 50px 0;
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`

export const StyledLink = styled(LinkButton)`
  display: flex;
  gap: 8.2px;
  text-align: center;
  align-items: center;
`

export const StyledAuthLink = styled(Link)`
  color: var(--color-navy-100);
  font-size: 20px;
  font-weight: 500;
  &:hover {
    color: var(--color-green-200);
  }
`

export const StyledMenu = styled.div`
  display: flex;
  padding: ${responsiveSizing(7, 10, 320, 600)};
  color: var(--color-white-100);
  background-color: var(--color-green-200);
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (min-width: 600px) {
    padding: 10px;
  }
  svg {
    width: ${responsiveSizing(30, 45, 320, 600)};
    height: ${responsiveSizing(30, 45, 320, 600)};
    @media (min-width: 600px) {
      width: 45px;
      height: 45px;
    }
  }
`

export const StyledAccount = styled(AccountIcon)`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: var(--color-navy-100);
  padding: 0 16px;
  path {
    fill: var(--color-white-100);
  }
`

export const SheetWrapper = styled.div``

export const StyledNavigationMenuContent = styled(NavigationMenuContent)`
  padding: 15px 20px;
  border: 2px var(--color-green-200) solid;
  background-color: var(--color-white-100);
  border-radius: 16px;
`

export const StyledDropList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const StyledNavigation = styled(NavigationMenu)`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const StyledNavigationSheet = styled(NavigationMenu)`
  display: block;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1440px) {
    display: none;
  }
`

export const StyledNavigationList = styled(NavigationMenuList)`
  gap: 30px;
`

export const StyledNavigationListSheet = styled(NavigationMenuList)`
  align-items: start;
  flex-direction: column;
  gap: 10px;
`

export const StyledNavText = styled(NavLink)`
  color: var(--color-navy-100);
  font-size: 20px;
  font-weight: 500;
  :hover {
    color: var(--color-green-200);
  }
`

export const StyledNavTextTrigger = styled(NavigationMenuTrigger)`
  color: var(--color-navy-100);
  font-size: 20px;
  font-weight: 500;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  gap: 20px;
`

export const StyledCart = styled(CartIcon)`
  width: ${responsiveSizing(50, 56)};
  height: ${responsiveSizing(50, 56)};
  border-radius: 100px;
  background-color: var(--color-navy-100);
  padding: 0 16px;
  path {
    stroke: var(--color-white-100);
  }
`
