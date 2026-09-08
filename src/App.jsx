import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart.jsx'
import View from './pages/View.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Footer from './components/Footer.jsx'




function App() {

  return (
    <div className='d-flex flex-column min-vh-100'>

      <main className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<View />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
