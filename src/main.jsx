import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes/AppRouter'
// import AppRouter from './routes/AppRouter'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
