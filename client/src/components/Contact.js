import React, { useEffect, useState } from 'react';

const Contact = () => {

  const [userData, setUserData] = useState({});

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
      setUserData(data);

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
          <form className="row">
            <div className="col-md-4 mb-3">
              <input type="text" className="form-control p-2" placeholder="Your Name" value={userData.name} required />
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control p-2" aria-describedby="emailHelp" placeholder='Email' value={userData.email} />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control p-2" placeholder="Phone No." value={userData.phone} required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" placeholder="Message" style={{ height: "150px" }}></textarea>
            </div>
            <div className="container my-4">
              <button className="btn btn-danger" type='submit'>Send Messages</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact