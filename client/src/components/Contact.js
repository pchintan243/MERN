import React from 'react'

const Contact = () => {
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
          <form className="row m-4">
            <div className="col-md-4">
              <input type="text" className="form-control p-3" placeholder="Your Name" required />
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control p-3" aria-describedby="emailHelp" placeholder='Email' />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control p-3" placeholder="Phone No." required />
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