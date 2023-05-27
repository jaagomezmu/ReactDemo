import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import { MyNavbar } from './components/myNavbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';

function App() {
  
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <MyNavbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
