import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import DashboardPage from './pages/Dashboard'
import CoinPage from './pages/coin'
import ComparePage from './pages/Compare'
import WatchListPage from './pages/WatchList'

function App() {
  return (
    <>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/watchlist' element={<WatchListPage />} />
        </Routes>
    </>
  )
}

export default App