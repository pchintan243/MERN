import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../images/aboutpic.png';

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

  useEffect(() => {
    callAboutPage();
  }, [])


  return (
    <>
      <div className="container m-6">
        <form method="GET">
          <div className='row d-flex justify-content-center'>
            <div className="col-md-9 d-flex justify-content-center align-items-center">
              <div className="col-md-3">
                <img src={profile} alt="profile-pic" style={{ height: "200px", width: "170px" }} />
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h3>Vinod Thapa</h3>
                  <h5>Web Developer</h5>
                  <p className='mt-3 mb-5 fw-bold'>Rankings: <span> 1/10 </span></p>
                  <ul className="nav nav-tabs" role='tablist'>
                    <li className="nav-item">
                      <a href="#home" id='home-tab' data-toggle='tab' role='tab' className="nav-link" aria-controls='home' aria-selected='true'>About</a>
                    </li>
                    <li className="nav-item">
                      <a href="#profile" id='profile-tab' data-toggle='tab' role='tab' className="nav-link" aria-controls='profile' aria-selected='true'>Timeline</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 mt-3">
              <input type="submit" className="btn btn-sm btn-secondary" value="Edit Profile" name="btnAddMore" />
            </div>
          </div>
          <div className="row">
            {/* Left side Url  */}
            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ paddingLeft: "80px" }}>
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="https://www.google.com" className='nav-link'>Google</a>
                <a href="https://www.facebook.com" className='nav-link'>Facebook</a>
                <a href="https://www.amazon.com" className='nav-link'>Amazon</a>
                <a href="https://www.github.com/pchintan243" className='nav-link'>Github</a>
                <a href="https://www.github.com" className='nav-link'>GitProf</a>
              </div>
            </div>


            {/* Right side data Toggle */}
            <div className="col-md-8 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>User ID</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>7824873797</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Name</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>Chintan Patel</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Email</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>patelchintan843@gmail.com</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Phone No.</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>9876543210</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Profession</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby='profile-tab'>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Experience</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Hourly Rate</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Total Projects</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>500</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>English Level</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-space-between">
                      <label className='text-dark m-0 h5'>Availability</label>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About