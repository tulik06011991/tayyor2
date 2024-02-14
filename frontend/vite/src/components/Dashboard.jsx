import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('')

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setTitle(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    try {
      const response = await axios.post('http://localhost:5000/auth/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="conteiner">
        <div className="row">
          <div className="col-4 mx-auto mt-5">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Rasm yuklang</label>
                <input  type="file" onChange={handleImageChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Izoh yozing</label>
                <input  type="text" onChange={handleImageChange} className="form-control" id="exampleInputPassword1"/>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard