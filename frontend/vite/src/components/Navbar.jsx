import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Menu</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/main">Main</Link>
        </li>
       
      </ul>
    </div>
  </div>
  <span>
          <Link  to="/">Features</Link>
    
          <Link  style={{margin: '10px 20px'}} to="/">Pricing</Link>
  </span>
</nav>

    </div>
  )
}

export default Navbar