import Title from '@/components/ui/Title'
import { NoProductsBox } from './CartOrders.styled'
import { LinkButton } from '@/components/ui/button'

function NoProductsInCart() {
  return (
    <NoProductsBox>
      <Title className="mb-8 tablet:mb-10 laptop:mb-12 desktop:mb-14" type="h2">
        No products in cart now
      </Title>
      <LinkButton arrow={true} link="home">
        Make order
      </LinkButton>
    </NoProductsBox>
  )
}

export default NoProductsInCart
