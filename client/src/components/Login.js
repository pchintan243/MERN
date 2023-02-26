import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleInputs = (e) => {
  }

  return (
    <>
      <div className="mainn-login">
        <div className="main-login">
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" autoComplete='off' required />
              <button type="submit" className='login-btn'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login