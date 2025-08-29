import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import {
  StyledNavigationSheet,
  StyledNavigationListSheet,
} from './Header.styled'
import Logo from '@/components/modules/Logo/Logo'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import AuthLink from './AuthLink'
import CartBtn from './CartBtn'
import MenuItem from './MenuItem'

type MobileSheetProps = {
  toggleOpen: () => void
  open: boolean
}

function MobileSheet({ toggleOpen, open }: MobileSheetProps) {
  return (
    <>
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
    </>
  )
}

export default MobileSheet
