import { Backdrop } from '@/components/ui/Backdrop'
import MainLoader from '@/components/ui/loaders/MainLoader/MainLoader'

function PageLoader() {
  return (
    <Backdrop className="z-1000">
      <MainLoader />
    </Backdrop>
  )
}

export default PageLoader
