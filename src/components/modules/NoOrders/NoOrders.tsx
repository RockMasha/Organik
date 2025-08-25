import Title from '@/components/ui/Title'
import { LinkButton } from '@/components/ui/button'
import { NoProductsBox } from './NoOrders.styled'

function NoOrders({ title }: { title: string }) {
  return (
    <NoProductsBox>
      <Title className="mb-8 tablet:mb-10 laptop:mb-12 desktop:mb-14" type="h2">
        {title}
      </Title>
      <LinkButton arrow={true} link="home">
        Make order
      </LinkButton>
    </NoProductsBox>
  )
}

export default NoOrders
