import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        email,
        password
      });
      if (response.data.status === 200) {
        // Redirect to login page
        window.location.to = '/login'; // Or you can use React Router's Link component
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Bu foydalanuvchi avval ro'yxatdan o'tgan");
      } else if (error.response.status === 401) {
        toast.error('Siz hamma bo"sh joylarni to"ldirmadingiz');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 mt-5 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} id="exampleInputUsername" aria-describedby="emailHelp"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
