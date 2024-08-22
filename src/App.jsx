import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart'
import { ShopContextProvider } from './context/shopContext';

function App() {


  return (
    <>
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
