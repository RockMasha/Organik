import AuthLink from './AuthLink'
import {
  StyledHeader,
  StyledContainer,
  StyledDropList,
  StyledNavigationMenuContent,
  StyledDiv,
  StyledNavigation,
  StyledNavigationList,
  StyledNavText,
  StyledNavTextTrigger,
  SheetWrapper,
  StyledMenu,
} from './Header.styled'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import MenuItem from './MenuItem'
import Logo from '@/components/modules/Logo/Logo'
import CartBtn from './CartBtn'
import useWindowWidth from '@/shared/hooks/useWindowWidth'
import { getRoute } from '@/shared/helpers/getRoute'
import { lazy } from 'react'
import { Suspense } from 'react'
import useOpen from '../hooks/useOpen'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'

const MobileSheet = lazy(() => import('./MobileSheet'))

function Header() {
  const { open, setOpen, toggleOpen } = useOpen()
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
                      <StyledNavText to={getRoute('home')}>Home</StyledNavText>
                    </li>
                    <li>
                      <StyledNavText to={getRoute('cart')}>Cart</StyledNavText>
                    </li>
                  </StyledDropList>
                </StyledNavigationMenuContent>
              </NavigationMenuItem>
              <MenuItem link="hero">Welcome</MenuItem>
              <MenuItem link="about">About us</MenuItem>
              <MenuItem link="categories">Categories</MenuItem>
              <MenuItem link="products">Products</MenuItem>
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
                  <StyledMenu>
                    <MenuIcon />
                  </StyledMenu>
                </SheetTrigger>
                <Suspense fallback={null}>
                  {open && <MobileSheet toggleOpen={toggleOpen} open={open} />}
                </Suspense>
              </Sheet>
            </SheetWrapper>
          )}
        </StyledDiv>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
