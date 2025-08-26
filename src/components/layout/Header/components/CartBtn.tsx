import { selectToken } from '@/store'
import { useSelector } from 'react-redux'
import { StyledCart, StyledCartBtn } from './Header.styled'

function CartBtn() {
  const token = useSelector(selectToken)
  return (
    <>
      {token && (
        <StyledCartBtn link="cart" variant="transparent" size="half_rounded">
          <StyledCart />
          Cart
        </StyledCartBtn>
      )}
    </>
  )
}

export default CartBtn
