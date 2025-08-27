import { createHashRouter } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import RedactProfilePage from '@/pages/RedactProfilePage'
import NotFoundPage from '@/pages/NotFoundPage'
import LoginPage from '@/pages/LoginPage'
import Layout from '@/components/layout/Layout/Layout'
import PrivateRoute from './PrivateRoute'
import PublicOnlyRoute from './PublicOnlyRoute'
import { ROUTES } from '@/shared/consts/ROUTES'
import ThankOrderPage from '../ThankOrderPage'
import { ProductModal } from '@/features/ProductModal'
import OrderHistoryPage from '../OrderHistoryPage'

const router = createHashRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
        children: [
          {
            path: ROUTES.product,
            element: <ProductModal />,
          },
        ],
      },
      {
        path: ROUTES.register,
        element: <PublicOnlyRoute Component={<RegisterPage />} />,
      },
      {
        path: ROUTES.login,
        element: <PublicOnlyRoute Component={<LoginPage />} />,
      },
      {
        path: ROUTES.cart,
        element: <PrivateRoute Component={<CartPage />} />,
      },
      {
        path: ROUTES.thankOrder,
        element: <ThankOrderPage />,
      },
      {
        path: ROUTES.orderHistory,
        element: <PrivateRoute Component={<OrderHistoryPage />} />,
      },
      {
        path: ROUTES.profile,
        element: <PrivateRoute Component={<ProfilePage />} />,
      },
      {
        path: ROUTES.editProfile,
        element: <PrivateRoute Component={<RedactProfilePage />} />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router
