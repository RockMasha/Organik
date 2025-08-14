import { Button } from '@/components/ui/button'
import { selectToken } from '@/store'
import { useSelector } from 'react-redux'
import { StyledCart, StyledLink } from './Header.styled'

function CartBtn() {
  const token = useSelector(selectToken)
  return (
    <>
      {token && (
        <Button variant="transparent" size="half_rounded">
          <StyledLink to="/cart">
            <StyledCart />
            Cart
          </StyledLink>
        </Button>
      )}
    </>
  )
}

export default CartBtn
