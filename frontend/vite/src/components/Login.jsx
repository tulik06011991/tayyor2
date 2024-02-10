import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleLogin = async (e) =>{
    e.preventDefault()
    const response = await axios.post(`http://localhost:5000/auth/login`, {email, password})
    .then((response) =>console.log(response.data))
    .catch((error) =>console.log(error))
  }

  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 mt-5 mx-auto">
            <form onSubmit={handleLogin}>
              
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Email</label>
                <input type="email"  onChange={(e) =>setEmail(e.target.value)} class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" onChange={(e) =>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login
