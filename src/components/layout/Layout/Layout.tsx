import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Toaster } from '@/components/ui/sonner'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <Toaster />
    </>
  )
}

export default Layout
