import { Button } from '@/components/ui/button'
import AuthLink from './AuthLink'

import { useState } from 'react'
import {
  StyledHeader,
  StyledContainer,
  StyledP,
  StyledLink,
  StyledLogo,
  StyledCart,
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
  // StyledAuthLink,
} from '@/components/layout/Header/Header.styled'
import {
  NavigationMenuItem,
  NavigationMenuContent,
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
    console.log(43)
  }
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledDiv>
          <StyledLink to="/">
            <StyledLogo />
            <StyledP>Organick</StyledP>
          </StyledLink>

          <StyledNavigation>
            <StyledNavigationList>
              <NavigationMenuItem>
                <StyledNavTextTrigger variant="transparent_without_bd">
                  Pages
                </StyledNavTextTrigger>
                <NavigationMenuContent>
                  <ul>
                    <li>
                      <NavigationMenuLink href="/">Home</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/cart">Cart</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <StyledNavText to="/#about">About us</StyledNavText>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <StyledNavText to="/#categories">Categories</StyledNavText>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <StyledNavText to="/#hero">Hero</StyledNavText>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <StyledNavText to="/#products">Products</StyledNavText>
              </NavigationMenuItem>
            </StyledNavigationList>
          </StyledNavigation>
        </StyledDiv>

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

              <SheetContent side="right" open={open} onClose={handleClose}>
                <SheetHeader>
                  <SheetTitle>
                    <StyledLink to="/" onClick={handleClose}>
                      <StyledLogo />
                      <StyledP>Organick</StyledP>
                    </StyledLink>

                    <SheetAuthLink />
                  </SheetTitle>

                  <StyledNavigationSheet>
                    <StyledNavigationListSheet>
                      <NavigationMenuItem>
                        <StyledNavTextTrigger variant="transparent_without_bd">
                          Pages
                        </StyledNavTextTrigger>
                        <NavigationMenuContent>
                          <ul>
                            <li >
                              <NavigationMenuLink href="/" onClick={handleClose}>
                                Home
                              </NavigationMenuLink>
                            </li>
                            <li >
                              <NavigationMenuLink href="/cart" onClick={handleClose}>
                                Cart
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem >
                        <StyledNavText to="/#about" onClick={handleClose}>About us</StyledNavText>
                      </NavigationMenuItem>

                      <NavigationMenuItem >
                        <StyledNavText to="/#categories" onClick={handleClose}>
                          Categories
                        </StyledNavText>
                      </NavigationMenuItem>

                      <NavigationMenuItem  >
                        <StyledNavText to="/#hero" onClick={handleClose}>Hero</StyledNavText>
                      </NavigationMenuItem>

                      <NavigationMenuItem >
                        <StyledNavText to="/#products" onClick={handleClose}>Products</StyledNavText>
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
