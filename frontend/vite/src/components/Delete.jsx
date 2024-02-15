import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Delete = () => {
  const {id} = useParams()
  const navigate= useNavigate()

  const Orqaga = () =>{
    navigate('/product')
  }


  
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/auth/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if(response){
              toast.success(`malumot o'chirildi`)

            };
        } catch (error) {
            console.log(error);
        }
    };
    

    <form onSubmit={handleDelete}>
    <button type="submit">O'chirish</button>
  </form>

  return (
    <div>
      <div>
        <h3>ma'lumot haqiqatdan ham o'chirilsinmi?</h3>

      <form onSubmit={handleDelete}>
        <button type="submit">O'chirish</button>
      </form>

      </div>
      <div>
      <button  onClick={Orqaga}>Orqaga</button>

      </div>

    </div>
  )
}

export default Delete
