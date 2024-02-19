import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Serverga so'rovni yuborish
      const response = await axios.post(`http://localhost:5000/auth/register`, {
        username,
        email,
        password
      });
      
      console.log(response);
      // Ma'lumotlar muvaffaqiyatli yuborildi
      toast.success('Ro\'yxatga olindi!');
      navigate('/login')

    } catch (error) {
      // Serverdan kelgan xato
      if (error.response.status === 400) {
        toast.error('Bu foydalanuvchi ro\'yxatdan o\'tgan');
      } else if (error.response.status === 401) {
        toast.error('Hamma maydonlarni to\'ldiring');
      } else {
        toast.error('Xatolik yuz berdi');
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 mt-5 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">Username</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="usernameInput" aria-describedby="usernameHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="emailInput"/>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="passwordInput"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
