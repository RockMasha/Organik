import { NavigationMenuItem } from '@radix-ui/react-navigation-menu'
import { StyledNavText } from './Header.styled'
import { ROUTES } from '@/shared/consts/ROUTES'
import type { ChildrenProps } from '@/types'

type Link =
  | 'categories'
  | 'home'
  | 'cart'
  | 'hero'
  | 'about'
  | 'products'
  | 'ecoFriendly'
  | 'news'
  | 'offer'
  | 'testimonial'
  | 'vegetables'

interface MenuItemProps extends ChildrenProps {
  link: Link
  onClick?: () => void
}

const getLink = (link: Link) => {
  switch (link) {
    case 'home':
      return ROUTES.home
    case 'cart':
      return ROUTES.cart

    default:
      return `/#${link}`
  }
}

function MenuItem({ link, onClick, children }: MenuItemProps) {
  return (
    <NavigationMenuItem>
      <StyledNavText to={getLink(link)} onClick={onClick}>
        {children}
      </StyledNavText>
    </NavigationMenuItem>
  )
}

export default MenuItem
