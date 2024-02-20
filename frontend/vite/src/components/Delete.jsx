import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Delete = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  
  


  const handleDelete = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:5000/auth/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(response) {
        toast.success(`muvaffaqiaytli o'chirildi`)
        navigate('/product')
      }
    } catch (error) {
      console.log(error);
    }
  };
  
    useEffect(() => {
      setTimeout(() => {
        handleDelete();
        navigate('/product');
      }, 1500);
      
      // Agar komponent bekor qilingan bo'lsa, timeoutni bekor qilish uchun
     
    }, []);
  
   

  const Orqaga = () => {
    clearTimeout();
    navigate('/product')
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="card mt-5">
              
              <div className="card-body">
                <h5 className="card-title">Ma'lumot</h5>
                
                <p className="card-text"> o'chirilsinmi?.</p>
                <div className='d-flex justify-content-between  align-items-center'>

                <button type='button' onClick = {Orqaga} className="btn btn-primary">Orqaga</button>
                <form onSubmit={handleDelete}>
                <button className="btn btn-primary">O'chirish</button>

                </form>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer/>

    </>
  )
}

export default Delete
