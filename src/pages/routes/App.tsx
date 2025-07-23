import { createBrowserRouter } from 'react-router-dom'
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: 'products/:productId',
          },
        ],
      },
      {
        path: 'register',
        element: <PublicOnlyRoute Component={<RegisterPage />} />,
      },
      {
        path: 'login',
        element: <PublicOnlyRoute Component={<LoginPage />} />,
      },
      {
        path: 'cart',
        element: <PrivateRoute Component={<CartPage />} />,
      },
      {
        path: 'cart/thank',
        element: <PrivateRoute Component={<CartPage />} />,
      },
      {
        path: 'profile',
        element: <PrivateRoute Component={<ProfilePage />} />,
      },
      {
        path: 'profile/edit',
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
