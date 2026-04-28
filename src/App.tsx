import Home from './components/home'
import { Route, Routes, HashRouter } from 'react-router-dom'


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