import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import CartIcon from '@/assets/icons/cart-icon.svg?react'
import MenuIcon from '@/assets/icons/menu.svg?react'
import AccountIcon from '@/assets/icons/account.svg?react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { NavLink } from 'react-router-dom'
import responsiveSizing from '@/styles/helpers/resonsiceSizing'

export const StyledHeader = styled.header`
  padding-top: ${responsiveSizing(20, 40, 320, 768)};
  padding-bottom: ${responsiveSizing(30, 47, 320, 768)};
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: ${responsiveSizing(47, 40, 768, 1440)};
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: ${responsiveSizing(40, 58, 1440, 1920)};
    padding-top: ${responsiveSizing(40, 50, 1440)};
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 58px;
    padding-top: 50px;
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  display: flex;
  gap: 8.2px;
  text-align: center;
  align-items: center;
`

export const StyledAuthLink = styled(Link)`
  color: var(--color-navy-100);
  font-size: 20px;
  font-weight: 500;
  :hover {
    color: var(--color-green-200);
  }
`

export const StyledMenu = styled(MenuIcon)`
  background-color: var(--color-green-200);
  color: var(--color-white-100);
  border-radius: 16px;
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
`

export const StyledAccount = styled(AccountIcon)`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: var(--color-navy-100);
  padding: 0 16px;
  path {
    fill: var(--color-white-100);
  }
`

export const SheetWrapper = styled.div``

export const StyledNavigationMenuContent = styled(NavigationMenuContent)`
  padding: 15px 20px;
  border: 2px var(--color-green-200) solid;
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
  @media screen and (min-width: 1440px) {
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
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  :hover {
    color: var(--color-green-200);
  }
`

export const StyledNavTextTrigger = styled(NavigationMenuTrigger)`
  color: var(--color-navy-100);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
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
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: var(--color-navy-100);
  padding: 0 16px;
  path {
    stroke: var(--color-white-100);
  }
`
