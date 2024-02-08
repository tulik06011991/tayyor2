import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Main from './components/Main'
import Menu from './components/Menu'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/register' element = {<Register/>}/>
    <Route path='/logout' element = {<Logout/>}/>
    <Route path='/main' element = {<Main/>}/>
    <Route path='/' element = {<Menu/>}/>
   </Routes>
   </>

  )
}

export default App