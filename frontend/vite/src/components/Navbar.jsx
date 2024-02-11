import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import axios from 'axios';

const Navbar = () => {
  const user = useContext(userContext);
  const navigate= useNavigate()
  
const handleLogout = () =>{
  axios.post(`http://localhost:5000/logout`)
  .then(() =>{
    navigate('/login')

  }).catch((error) =>{
    console.log (error)
  })
}




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-header collapse navbar-collapse justify-content-between">
            <Link className="navbar-brand" to="/">Menu</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-nav" id="navbarNav">
            <ul className="navbar-nav">
              {user ? (
                <li className="nav-item">
                  <button className="nav-link" onClick={() => {handleLogout}}>Logout</button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
