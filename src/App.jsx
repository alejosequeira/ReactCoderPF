
import styles from './App.module.css'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/checkOut/CheckOut'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path='/' element={<Home />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}></Route>
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
