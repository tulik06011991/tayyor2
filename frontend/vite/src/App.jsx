import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import  { Routes , Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

import Dashboard from './components/Dashboard'
import Menu from './components/Menu'
import axios from 'axios'
import { createContext } from 'react'

export const userContext = createContext()

const App = () => {
  const navigate= useNavigate()
  const [user, setUser] = useState([]) // user'ning qiymati null bo'lishi

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((response) => {
        setUser(response)
        console.log(user)
      })
      .catch((error) => {
        if(error){
         console.log(error)

        }
      })
  }, []) // useEffect faqat bir marta ishga tushishi kerak, [] orqali

 // user o'zgarishi bo'lganda useEffect ishga tushishi kerak

  return (
    <>
      <userContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Menu />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
