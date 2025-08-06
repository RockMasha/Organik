import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import CartIcon from '@/assets/icons/cart-icon.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'
import MenuIcon from '@/assets/icons/menu.svg?react'
import AccountIcon from '@/assets/icons/account.svg?react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { NavLink } from 'react-router-dom'

//baze
export const StyledHeader = styled.header`
  padding-top: calc(20px + (40 - 20) * (100vw - 320px) / (768 - 320));
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: calc(40px + (50 - 40) * (100vw - 1440px) / (1920 - 1440));
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  column-gap: calc(20px + (268 - 20) * (100vw - 320px) / (768 - 320));
  @media screen and (min-width: 768px) {
    row-gap: 0;
    column-gap: 0;
    justify-content: space-between;
  }
`
//logo
export const StyledLink = styled(Link)`
  display: flex;
  gap: 8.2px;
  text-align: center;
  align-items: center;
`

//authlink
export const SheetAuthLink = styled(Link)`
  display: block;
`
export const StyledAuthLink = styled(Link)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`
export const StyledP = styled.h1`
  color: #274c5b;
  font-family: 'Roboto';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const StyledLogo = styled(LogoIcon)`
  width: 37px;
  height: 53px;
  path {
    stroke: #7eb693;
  }
`

//side-bar
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
  background: #274c5b;
  padding: 0 16px;
  path {
    fill: white;
  }
`
export const SheetWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`

//nav
export const StyledNavigation = styled(NavigationMenu)`
  display: none;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`
export const StyledNavigationSheet = styled(NavigationMenu)`
  display: block;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`
export const StyledNavigationList = styled(NavigationMenuList)`
  gap: 30px;
`
export const StyledNavigationListSheet = styled(NavigationMenuList)`
  gap: 30px;
  display: block;
`
export const StyledNavText = styled(NavLink)`
  color: #274c5b;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`

export const StyledNavTextTrigger = styled(NavigationMenuTrigger)`
  color: #274c5b;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`
//group
export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`
export const StyledCart = styled(CartIcon)`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: #274c5b;
  padding: 0 16px;
  path {
    stroke: white;
  }
`
