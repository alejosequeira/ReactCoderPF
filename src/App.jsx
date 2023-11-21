
import styles from './App.module.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/item/listcontainer/ItemListContainer'
import ItemDetailContainer from './components/item/detailcontainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  return (
    < >

      <div className={styles.app}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path='/' element={<Home/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
