import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart'
import SingleProduct from './pages/singleProduct/singleProduct.jsx';
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
            <Route path='/product/:id' element={<SingleProduct />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
