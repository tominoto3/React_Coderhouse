import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import Layout from './components/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CategoryContainer from './components/CategoryProducts/CategoryProductsContainer';

function App() {

  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:ItemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:CategoryId' element={<CategoryContainer/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App;
