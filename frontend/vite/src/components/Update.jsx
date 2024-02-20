import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get(`http://localhost:5000/auth/getId/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setImage(response.data.newProduct.image)
          setTitle(response.data.newProduct.title)
        }
      } catch (error) {
        console.log(error);
        toast.error("Error occurred while fetching data");
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);

      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.put(`http://localhost:5000/auth/update/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data)

        toast.success("Data updated successfully");
        navigate('/product')
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while updating data");
    }
  }

  const handleBack = () => {
    navigate('/product')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5">
            <img src={`http://localhost:5000/images/${image}`} alt="/"  style={{ width: '100%', height: '20rem', margin: '5px auto', borderRadius: '10px' }}/>
          </div>
          <div className="col-6 mt-5">
            <form onSubmit={handleSubmit} encType='multipart/form-data' >
              <div className="mb-3">
                <label htmlFor="imageInput" className="form-label">Image</label>
                <input type="file" name='image' id="imageInput" onChange={(e) => setImage(e.target.files[0])} className="form-control" aria-describedby="imageHelp" />
                <div id="imageHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">Title</label>
                <input type="text" value={title} name='title' id="titleInput" onChange={(e) => setTitle(e.target.value)} className="form-control" />
              </div>
              <div className='d-flex justify-content-between'>
              <button type="button" onClick={handleBack} className="btn btn-primary mt-5 me-5 px-2">orqaga</button>
              <button type="submit" className="btn btn-primary mt-5">Saqlash</button>

              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Update;
