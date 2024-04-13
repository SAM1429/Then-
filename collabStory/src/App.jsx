import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import YourActivity from './pages/YourActivity'
import Header from './components/Header'


export default function App() {
  return (
    <BrowserRouter>
    <Header>
    </Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/activity' element={<YourActivity/>}/>
    </Routes>
    
    
    </BrowserRouter> 
  )
}
