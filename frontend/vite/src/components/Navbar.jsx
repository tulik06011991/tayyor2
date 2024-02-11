import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../App';

const Navbar = () => {
  const user = useContext(userContext);
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Menu</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav  collapse navbar-collapse justify-content-between">
            {user ? (
              <li className="nav-item">
                <button>
                <Link className="nav-link" to="/logout">Logout</Link>

                Logout</button>
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
