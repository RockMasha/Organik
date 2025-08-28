import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import Footer from '../Footer/Footer'
import { Toaster } from '@/components/ui/sonner'
import { useScrollToHashElement } from '@/shared/hooks/useScrollToHashElement'
import UpBtn from '@/components/modules/UpBtn/UpBtn'

function Layout() {
  useScrollToHashElement()

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <Toaster />
      <UpBtn />
    </>
  )
}

export default Layout
