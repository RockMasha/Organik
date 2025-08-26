import { getRoute } from '@/shared/helpers/getRoute'
import { StyledLink, StyledIcon, StyledText } from './Logo.styled'

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <StyledLink to={getRoute('home')} onClick={onClick}>
      <StyledIcon />
      <StyledText>Organick</StyledText>
    </StyledLink>
  )
}

export default Logo
