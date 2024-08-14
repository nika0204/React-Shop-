import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
