import { selectToken } from '@/store'
import { useSelector } from 'react-redux'
import { StyledCart, StyledLink } from './Header.styled'

function CartBtn() {
  const token = useSelector(selectToken)
  return (
    <>
      {token && (
        <StyledLink link="cart" variant="transparent" size="half_rounded">
          <StyledCart />
          Cart
        </StyledLink>
      )}
    </>
  )
}

export default CartBtn
