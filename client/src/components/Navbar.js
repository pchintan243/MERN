import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { UserContext } from '../App';

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);

    // Our state value is getting from--> reducer/UseReducer.js file
    const CheckFunction = () => {
        // If user is login then it shows logout option
        // Not display registraion or login option
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            )
        }
        else {
            // If user is not login then it shows registration and login option
            // Not display registraion or logout option
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Registration</Link>
                    </li>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{ height: 60 }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {/* Check user is login or not so we modify our navbar */}
                            <CheckFunction />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar