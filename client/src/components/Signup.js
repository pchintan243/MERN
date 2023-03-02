import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();

  // It takes user data field
  // Mention all the field in the useState hook
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  });

  // To get the user data
  // Also you can see on browser to inspect an element after components
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    // Get all the value using the target
    setUser({ ...user, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    // It navigate to directly our /register post method from auth.js file
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // Get all the data from the user
        name, email, phone, password, cpassword
      })
    });

    // To get the data
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registratoin");
      console.log("Invalid Registratoin");
    }
    else {
      // If registratio succesfull then user will get one alert box and after that it's navigate to login page
      window.alert("Registration Successfull");
      console.log("Successfull Registration");
      navigate("/login");
    }
  }

  return (
    <>
      <div className="mainn">
        <div className="main">
          <div className="signup">
            <form method='POST'>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleInputs} required />
              <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} required />
              <input type="text" name="phone" placeholder="Phone No." value={user.phone} onChange={handleInputs} required />
              <input type="password" name="password" placeholder="Password" autoComplete='off' value={user.password} onChange={handleInputs} required />
              <input type="password" name="cpassword" placeholder="Confirm Password" autoComplete='off' value={user.cpassword} onChange={handleInputs} required />
              <button type="button" className='signup-btn' onClick={PostData}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp