import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import  CartProvider  from './context/CartProvider';
import CartContainer from './components/Cart/CartContainer';
import Checkout from './components/Checkout/Checkout';


function App() {


  return (
    <div>
      <BrowserRouter>

        <CartProvider>
          <Layout>

            <Routes>

              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:ItemId' element={<ItemDetailContainer />} />
              <Route path='/category/:CategoryId' element={<ItemListContainer/>} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<h1>Not Found</h1>} />

            </Routes>

          </Layout>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App;
