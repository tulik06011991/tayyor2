import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 mt-5 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="email" class="form-control" onChange={((e) =>setUsername(e.target.value))} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control"   onChange={((e) =>setEmail(e.target.value))}  id="exampleInputPassword1"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
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