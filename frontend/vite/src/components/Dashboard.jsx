


import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';









const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post('http://localhost:5000/auth/uploading', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }

        });
        console.log(formData);


        console.log(response.data);
        navigate('/product')

        
          
        
        
      } catch (error) {
        console.error(error);
        // Xatolik bo'lsa to'g'ri ishlashni yo'qotish

        toast.error('Xatolik yuz berdi! Iltimos, qayta urinib ko\'ring yoki bo"sh joy qoldirmang.');

      }
    } else {
      // Agar token mavjud emas bo'lsa foydalanuvchini avtorizatsiyadan o'tkazish
      navigate('/login');
    }
  };


  useEffect(() =>{
    handleSubmit()

  },[])


  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto mt-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="imageUpload" className="form-label">Rasm yuklang</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control" id="imageUpload" aria-describedby="imageHelp" />
                <div id="imageHelp" className="form-text">Iltimos, faqatgina rasm turi fayllarni yuklang.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">Sarlavha</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" id="titleInput" />
              </div>
              <button type="submit" className="btn btn-primary">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
