import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import  {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import Menu from './components/Menu'
import axios from 'axios'
import { createContext } from 'react'


export const userContext = createContext()



const App = () => {

const [user, setUser] = useState()

  
  useEffect(() =>{
    axios.get('http://localhost:5000/dashboard')
    .then((response) =>{

      setUser(response.data)
      console.log(user)
    }).catch((error) =>{
      console.log(error)
    })

  },[])
  return (
   <>
   

   <userContext.Provider value={user}>

   <Navbar/>
   <Routes>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/register' element = {<Register/>}/>
    <Route path='/logout' element = {<Logout/>}/>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/' element = {<Menu/>}/>
   </Routes>

  

   </userContext.Provider>
   
   </>

  )
}

export default App