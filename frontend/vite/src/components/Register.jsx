import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    try {
      const response  = axios.post(`http://localhost:5000/auth/register`,{
        username,
        email,
        password
      })
      
      console.log(response)
      
    } catch (error) {
    console.log(error)
  }

  
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 mt-5 mx-auto">
            <form  onSubmit={handleSubmit}>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" class="form-control" onChange={((e) =>setUsername(e.target.value))} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control"   onChange={((e) =>setEmail(e.target.value))}  id="exampleInputPassword1"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control"  onChange={((e) =>setPassword(e.target.value))} id="exampleInputPassword1"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Register