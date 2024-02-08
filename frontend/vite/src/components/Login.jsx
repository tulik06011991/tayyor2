import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 mt-5 mx-auto">
            <form>
              
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
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
