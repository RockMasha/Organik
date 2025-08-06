import { useSelector } from 'react-redux'
import type { RootState } from '@/types'
import { StyledLink, StyledAccount, StyledAuthLink } from './Header.styled'

function AuthLink() {
  const token = useSelector((state: RootState) => state.user.token)

  return token ? (
    <StyledLink to="/profile">
      <StyledAccount />
    </StyledLink>
  ) : (
    <StyledAuthLink to="/login">
      Увійти
    </StyledAuthLink>
  )
}

export default AuthLink
