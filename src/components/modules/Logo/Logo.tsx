import { StyledLink, StyledIcon, StyledText } from './Logo.styled'

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <StyledLink to="/" onClick={onClick}>
      <StyledIcon />
      <StyledText>Organick</StyledText>
    </StyledLink>
  )
}

export default Logo
