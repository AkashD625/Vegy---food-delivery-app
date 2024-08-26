import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeoder from './pages/Placeorder/Placeoder'
import Navbar from './components/Navbar/Navbar'


export default function App() {
  return (
<div className='app'>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/PLaceorder' element={<Placeoder/>}/>
  </Routes>
</div>
  )
}
