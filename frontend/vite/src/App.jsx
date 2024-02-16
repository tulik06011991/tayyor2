import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Menu from './components/Menu'
import Product from './components/Product'
import Delete from './components/Delete'
import Update from './components/Update'
import axios from 'axios'
import { createContext } from 'react'

export const userContext = createContext()

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null) // user'ning qiymati null bo'lishi

  useEffect(() => {
    const token = localStorage.getItem('token') // tokenni olish
    if (token) {
      axios.get('http://localhost:5000/auth/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
        console.log(token) // tokenni request headeriga qo'shish
      })
      .catch((error) => {
        console.log(error.message)
      })
    } else {
    navigate('/login') // agar token mavjud emas bo'lsa, login sahifasiga navigatsiya qilish
    }
  },[]) // navigate o'zgarishlarini eslatish

  return (
    <>
      <userContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/delete/:id' element={<Delete/>}/>
          <Route path='/' element={<Menu />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App