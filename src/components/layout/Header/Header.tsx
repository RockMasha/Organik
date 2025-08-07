import AuthLink from './AuthLink'
import { useState } from 'react'
import {
  StyledHeader,
  StyledContainer,
  StyledDropList,
  StyledNavigationMenuContent,
  StyledDiv,
  StyledMenu,
  SheetWrapper,
  StyledNavigation,
  StyledNavigationList,
  StyledNavText,
  StyledNavTextTrigger,
  StyledNavigationSheet,
  StyledNavigationListSheet,
} from '@/components/layout/Header/Header.styled'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import MenuItem from './MenuItem'
import Logo from '@/components/modules/Logo/Logo'
import CartBtn from './CartBtn'

const isShowPanel = () => {
  return window.innerWidth < 1440
}

function Header() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />

        {/* nav-menu */}
        {!isShowPanel() && (
          <StyledNavigation>
            <StyledNavigationList>
              <NavigationMenuItem>
                <StyledNavTextTrigger variant="transparent_without_bd">
                  Pages
                </StyledNavTextTrigger>
                <StyledNavigationMenuContent>
                  <StyledDropList>
                    <li>
                      <StyledNavText to="/">Home</StyledNavText>
                    </li>
                    <li>
                      <StyledNavText to="/cart">Cart</StyledNavText>
                    </li>
                  </StyledDropList>
                </StyledNavigationMenuContent>
              </NavigationMenuItem>
              <MenuItem link="hero">Welcome</MenuItem>
              <MenuItem link="about">About us</MenuItem>
              <MenuItem link="categories">Categories</MenuItem>
              <MenuItem link="products">Categories</MenuItem>
            </StyledNavigationList>
          </StyledNavigation>
        )}

        {/* cart btn */}
        <StyledDiv>
          {window.innerWidth > 600 && (
            <>
              <AuthLink />
              <CartBtn />
            </>
          )}
          {/* side-bar */}
          {isShowPanel() && (
            <SheetWrapper>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <StyledMenu />
                </SheetTrigger>
                <SheetContent side="right" open={open} onClose={handleClose}>
                  <SheetHeader>
                    <SheetTitle>
                      <Logo />
                    </SheetTitle>
                    <StyledNavigationSheet>
                      <StyledNavigationListSheet>
                        <NavigationMenuItem className="flex justify-between gap-4">
                          {window.innerWidth < 600 && (
                            <>
                              <AuthLink />
                              <CartBtn />
                            </>
                          )}
                        </NavigationMenuItem>
                        <MenuItem link="hero" onClick={handleClose}>
                          Welcome
                        </MenuItem>
                        <MenuItem link="about" onClick={handleClose}>
                          About us
                        </MenuItem>
                        <MenuItem link="categories" onClick={handleClose}>
                          Categories
                        </MenuItem>
                        <MenuItem link="products" onClick={handleClose}>
                          Products
                        </MenuItem>
                      </StyledNavigationListSheet>
                    </StyledNavigationSheet>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </SheetWrapper>
          )}
        </StyledDiv>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
