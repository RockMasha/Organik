import { NavigationMenuItem } from '@radix-ui/react-navigation-menu'
import { StyledNavText } from './Header.styled'
import type { ChildrenProps } from '@/types'
import { getRoute } from '@/shared/helpers/getRoute'
import type { HomeId } from '@/types/modules/routes/HomeId'

interface MenuItemProps extends ChildrenProps {
  link: HomeId
  onClick?: () => void
}

function MenuItem({ link, onClick, children }: MenuItemProps) {
  return (
    <NavigationMenuItem>
      <StyledNavText to={getRoute('home', link)} onClick={onClick}>
        {children}
      </StyledNavText>
    </NavigationMenuItem>
  )
}

export default MenuItem
