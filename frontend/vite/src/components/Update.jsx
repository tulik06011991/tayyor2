import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const navigate= useNavigate()
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const { id } = useParams();


  const Orqaga = () =>{
    navigate('/product')
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    const handleGet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/auth/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setImage(response.data.image);
        setTitle(response.data.title);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      handleGet();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/auth/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Ma\'lumot o\'zgartirildi');
      navigate('/product')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='Update'>
      <form onSubmit={handleUpdate}>
        <div className="card" style={{width: "18rem"}}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <button type="submit">O'zgartirish</button>
      </form>
      <span><button onClick={Orqaga}>Orqaga</button></span>
    </div>
  );
}

export default Update;
