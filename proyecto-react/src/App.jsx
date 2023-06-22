import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import {CartProvider} from "./componentes/CartContext/CartContext"
import Carrito from './componentes/Carrito/Carrito'
import { requestData } from './componentes/Services/firebase'
import Checkout from './componentes/Checkout/Checkout'

requestData()

function App() {

  return (
    <div>
      <CartProvider>
        
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path= "/carrito" element={<Carrito/>}/>
            <Route path='*' element={"404: Page Not Found"}/>
          </Routes>
      </BrowserRouter>
      </CartProvider>
   </div>
  );
}

export default App
