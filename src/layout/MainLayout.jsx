import React, { Suspense } from 'react'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'
import { Outlet } from 'react-router-dom'

// fallback UI
import Spinner from '@/components/loaders/Spinner'
const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default MainLayout
