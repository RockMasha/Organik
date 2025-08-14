import AuthLink from './AuthLink'
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
} from './Header.styled'
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
import useOpen from '../hooks/useOpen'
import useWindowWidth from '@/shared/hooks/useWindowWidth'

function Header() {
  const { open, toggleOpen, setOpen } = useOpen()
  const windowWidth = useWindowWidth()

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />

        {/* nav-menu */}
        {windowWidth >= 1440 && (
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
          {windowWidth > 600 && (
            <>
              <AuthLink />
              <CartBtn />
            </>
          )}
          {/* side-bar */}
          {windowWidth < 1440 && (
            <SheetWrapper>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <StyledMenu />
                </SheetTrigger>
                <SheetContent side="right" open={open} onClose={toggleOpen}>
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
                        <MenuItem link="hero" onClick={toggleOpen}>
                          Welcome
                        </MenuItem>
                        <MenuItem link="about" onClick={toggleOpen}>
                          About us
                        </MenuItem>
                        <MenuItem link="categories" onClick={toggleOpen}>
                          Categories
                        </MenuItem>
                        <MenuItem link="products" onClick={toggleOpen}>
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
