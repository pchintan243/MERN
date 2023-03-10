import React, { createContext, useReducer } from 'react'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Router>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
