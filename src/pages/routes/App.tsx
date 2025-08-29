import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout/Layout'
import PrivateRoute from './PrivateRoute'
import PublicOnlyRoute from './PublicOnlyRoute'
import { ROUTES } from '@/shared/consts/ROUTES'
import { lazy } from 'react'
import { Suspense } from 'react'
import PageLoader from '@/components/modules/PageLoader/PageLoader'

const ProductModal = lazy(
  () => import('@/features/ProductModal/components/ProductModal')
)
const HomePage = lazy(() => import('@/pages/HomePage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const CartPage = lazy(() => import('@/pages/CartPage'))
const ThankOrderPage = lazy(() => import('../ThankOrderPage'))
const OrderHistoryPage = lazy(() => import('../OrderHistoryPage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const RedactProfilePage = lazy(() => import('@/pages/RedactProfilePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const router = createBrowserRouter(
  [
    {
      path: ROUTES.home,
      element: (
        <Suspense fallback={<PageLoader />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: ROUTES.home,
          element: (
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          ),
          children: [
            {
              path: ROUTES.product,
              element: (
                <Suspense fallback={<PageLoader />}>
                  <ProductModal />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: ROUTES.register,
          element: <PublicOnlyRoute Component={RegisterPage} />,
        },
        {
          path: ROUTES.login,
          element: <PublicOnlyRoute Component={LoginPage} />,
        },
        {
          path: ROUTES.cart,
          element: <PrivateRoute Component={CartPage} />,
        },
        {
          path: ROUTES.thankOrder,
          element: (
            <Suspense fallback={<PageLoader />}>
              <ThankOrderPage />
            </Suspense>
          ),
        },
        {
          path: ROUTES.orderHistory,
          element: <PrivateRoute Component={OrderHistoryPage} />,
        },
        {
          path: ROUTES.profile,
          element: <PrivateRoute Component={ProfilePage} />,
        },
        {
          path: ROUTES.editProfile,
          element: <PrivateRoute Component={RedactProfilePage} />,
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: '/Organic',
  }
)

export default router
