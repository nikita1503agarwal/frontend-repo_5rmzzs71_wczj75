import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import GymPage from './pages/GymPage'
import CricketPage from './pages/CricketPage'
import IndoorPage from './pages/IndoorPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gym" element={<GymPage />} />
        <Route path="/cricket" element={<CricketPage />} />
        <Route path="/indoor" element={<IndoorPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
