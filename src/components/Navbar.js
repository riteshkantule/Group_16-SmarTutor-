import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">SmartTutor</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav justify-content-end">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/preregistration">PreRegistration</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/courseclash">CourseClash</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/courses">Courses</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/announcement">Announcement</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar