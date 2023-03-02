import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

  // For navbar option login and logout modify
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    // Getting the post request using auth.js
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Take the value of email and password
      body: JSON.stringify({
        email, password
      })
    });

    // Getting response from the user's data
    const data = await res.json();

    // Check the Credentials or data which is correct or not
    // Make sure status code on your post request is matching to this one
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials..!!");
    }
    else {
      // First check type value after that payload value will be true to navbar
      // It means user already login
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull..!!");
      // If user input correct email and password then it will get one alert and goes to home page
      navigate("/");
    }
  }

  return (
    <>
      <div className="mainn-login">
        <div className="main-login">
          <div className="login">
            <form method="POST">
              <label aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" name="password" placeholder="Password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className='login-btn' onClick={loginUser}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login