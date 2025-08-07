import { Button } from '@/components/ui/button'
import AuthLink from './AuthLink'

import { useState } from 'react'
import {
  StyledHeader,
  StyledContainer,
  StyledText,
  StyledLink,
  StyledLogo,
  StyledDropList,
  StyledCart,
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
  SheetAuthLink,
} from '@/components/layout/Header/Header.styled'
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

function Header() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLink to="/">
          <StyledLogo />
          <StyledText>Organick</StyledText>
        </StyledLink>
        {/* nav-menu */}
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

            <NavigationMenuItem>
              <StyledNavText to="/#hero">Welcome</StyledNavText>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <StyledNavText to="/#about">About us</StyledNavText>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <StyledNavText to="/#categories">Categories</StyledNavText>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <StyledNavText to="/#products">Products</StyledNavText>
            </NavigationMenuItem>
          </StyledNavigationList>
        </StyledNavigation>

        <StyledDiv>
          <AuthLink />

          <Button variant={'transparent'} size={'half_rounded'}>
            <StyledLink to="/cart">
              <StyledCart />
              Cart
            </StyledLink>
          </Button>

          <SheetWrapper>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <StyledMenu />
              </SheetTrigger>

              {/* side-bar */}
              <SheetContent side="right" open={open} onClose={handleClose}>
                <SheetHeader>
                  <SheetTitle>
                    <StyledLink to="/" onClick={handleClose}>
                      <StyledLogo />
                      <StyledText>Organick</StyledText>
                    </StyledLink>

                    <SheetAuthLink />
                  </SheetTitle>

                  {/* Side-bar nav menu */}
                  <StyledNavigationSheet>
                    <StyledNavigationListSheet>
                      <NavigationMenuItem>
                        <StyledNavTextTrigger variant="transparent_without_bd">
                          Pages
                        </StyledNavTextTrigger>
                        <StyledNavigationMenuContent>
                          <StyledDropList>
                            <li>
                              <StyledNavText to="/" onClick={handleClose}>
                                Home
                              </StyledNavText>
                            </li>
                            <li>
                              <StyledNavText to="/cart" onClick={handleClose}>
                                Cart
                              </StyledNavText>
                            </li>
                          </StyledDropList>
                        </StyledNavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <StyledNavText to="/#hero" onClick={handleClose}>
                          Welcome
                        </StyledNavText>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <StyledNavText to="/#about" onClick={handleClose}>
                          About us
                        </StyledNavText>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <StyledNavText to="/#categories" onClick={handleClose}>
                          Categories
                        </StyledNavText>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <StyledNavText to="/#products" onClick={handleClose}>
                          Products
                        </StyledNavText>
                      </NavigationMenuItem>
                    </StyledNavigationListSheet>
                  </StyledNavigationSheet>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </SheetWrapper>
        </StyledDiv>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
