import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Detalle from './views/Detalle'
import Home from './views/Home'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'
import Encontruccion from './views/Encontruccion'

function App() {
 
  return (
          <BrowserRouter>     
            <NavBar></NavBar>
              <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/detalle/:id" element={<Detalle></Detalle> } />
                <Route path="/carrito/" element={<Carrito></Carrito>} />
                <Route path="/encontruccion/" element={<Encontruccion></Encontruccion>} />
                <Route path="*" element={<NotFound></NotFound>} />
              </Routes>
          </BrowserRouter> 
  )
}

export default App
