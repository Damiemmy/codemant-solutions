import { useState } from 'react'
import Home from './components/home'
import Contact from './components/header'
import { Route, Routes, HashRouter } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App