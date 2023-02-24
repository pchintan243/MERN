import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="mainn">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="username" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="phone" placeholder="Phone No." required />
              <input type="password" name="password" placeholder="Password" autoComplete='off' required />
              <input type="password" name="cpassword" placeholder="Confirm Password" autoComplete='off' required />
              <button className='signup-btn'>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" autoComplete='off' required />
              <button className='signup-btn'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp