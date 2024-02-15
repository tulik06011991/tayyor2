import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Delete = () => {
  const {id} = useParams()


  const token = localStorage.getItem('token');
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
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            handleDelete();
        }
    }, []); 

  return (
    <div>
      <form onSubmit={handleDelete}>
        <button type="submit">O'chirish</button>
      </form>

    </div>
  )
}

export default Delete
