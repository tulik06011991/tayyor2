// App.js
import React, { useEffect, useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import axios from 'axios';

export const userContext = createContext();

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dashboard',
        {
           headers: {
             Authorization: `Bearer ${localStorage.getItem('token')}`,
           },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Foydalanuvchi ma\'lumotlarini olishda xato:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <userContext.Provider value={userData}>
      <>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </>
    </userContext.Provider>
  );
};

export default App;
