import React, { useEffect, useState } from 'react';

const Contact = () => {

  // Get the data of user
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  // For print the data make sure form method will be get method
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      console.log(data);
      // To get the data
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userContact();
  }, [])


  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Get all the details using below syntax
    // It's use for because we want multiple data like name, email, phone, message
    setUserData({ ...userData, [name]: value })
  }

  // Send the data to the backend
  const contactForm = async (e) => {
    e.preventDefault();
    // If User already login then name, email, phone number details are already filled. Only user need to type the message.

    const { name, email, phone, message } = userData;
    // It is directly push to out backend /about method
    // We use proxy in client/package.json file
    // For send the data to the database make sure form method will be post method
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();

    if (!data) {
      console.log("Message not send..!!");
    }
    else {
      alert("Message send..!!");
      setUserData({ ...userData, message: "" });
    }
  }

  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex justify-content-space-evenly my-3">
              {/* Phone Number */}
              <div className="col-md-3 d-flex justify-content-center align-items-center border border-dark rounded m-auto">
                <i className="fa-solid fa-phone m-2"></i>
                <div>
                  <div className="container">
                    Phone
                  </div>
                  <div className="container">
                    +91 9876543210
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="col-md-3 d-flex justify-content-center align-items-center border border-dark rounded m-auto">
                <i className="fa-solid fa-envelope m-2"></i>
                <div>
                  <div className="container">
                    Email
                  </div>
                  <div className="container">
                    patelchintan843@gmail.com
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="col-md-3 d-flex justify-content-center align-items-center border border-dark rounded m-auto">
                <i className="fa-solid fa-location-dot m-2"></i>
                <div>
                  <div className="container">
                    Address
                  </div>
                  <div className="container">
                    Surat, Gujarat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="container">
          <div className='text-center h3 fw-bold m-4'>
            Contact Form
          </div>
          <form className="row" method="POST">
            <div className="col-md-4 mb-3">
              <input type="text" className="form-control p-2" placeholder="Your Name" name="name" value={userData.name} onChange={handleInputs} required />
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control p-2" aria-describedby="emailHelp" placeholder='Email' name="email" value={userData.email} onChange={handleInputs} required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control p-2" placeholder="Phone No." name="phone" value={userData.phone} onChange={handleInputs} required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" placeholder="Message" name="message" value={userData.message} style={{ height: "150px" }} onChange={handleInputs} required></textarea>
            </div>
            <div className="container my-4">
              <button className="btn btn-danger" type='submit' onClick={contactForm}>Send Messages</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact