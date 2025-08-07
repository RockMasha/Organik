import { useSelector } from 'react-redux'
import { StyledLink, StyledAccount, StyledAuthLink } from './Header.styled'
import { selectToken } from '@/store'

function AuthLink() {
  const token = useSelector(selectToken)

  return token ? (
    <StyledLink to="/profile">
      <StyledAccount />
    </StyledLink>
  ) : (
    <StyledAuthLink to="/login">Увійти</StyledAuthLink>
  )
}

export default AuthLink
