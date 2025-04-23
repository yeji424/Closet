import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import NotFoundPage from '@/pages/NotFoundPage'

// lazy 로딩 페이지
const MainPage = lazy(() => import('@/pages/MainPage'))
const ShopPage = lazy(() => import('@/pages/ShopPage'))
const CartPage = lazy(() => import('@/pages/CartPage'))

// 로더
// import { shopPageLoader } from '@/loaders/shopLoader'
// import { cartPageLoader } from '@/loaders/cartLoader'

// fallback UI
import Spinner from '@/components/loaders/Spinner'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Spinner />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={<Spinner />}>
            <ShopPage />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<Spinner />}>
            <CartPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={AppRouter} fallbackElement={<div>로딩중...</div>} />
}
