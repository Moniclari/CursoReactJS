import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Layout } from './components/Layout/Layout'
import { CartView } from './components/Cart/CartView'


function App() {

  return (
    <>
      <Routes>
        <Route element ={<Layout/>}>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/carrito' element = {<CartView/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
