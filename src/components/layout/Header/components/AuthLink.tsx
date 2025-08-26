import { useSelector } from 'react-redux'
import { StyledLink, StyledAccount, StyledAuthLink } from './Header.styled'
import { selectToken } from '@/store'
import { getRoute } from '@/shared/helpers/getRoute'

function AuthLink() {
  const token = useSelector(selectToken)

  return token ? (
    <StyledLink to={getRoute('profile')}>
      <StyledAccount />
    </StyledLink>
  ) : (
    <StyledAuthLink to={getRoute('login')}>Login</StyledAuthLink>
  )
}

export default AuthLink
