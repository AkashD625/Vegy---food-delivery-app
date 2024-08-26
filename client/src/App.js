import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
<div className='app'>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
</div>
  )
}
