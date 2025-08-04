import { Backdrop } from '@/components/ui/Backdrop'
import MainLoader from '@/components/ui/Loaders/MainLoader/MainLoader'

function PageLoader() {
  return (
    <Backdrop>
      <MainLoader />
    </Backdrop>
  )
}

export default PageLoader
