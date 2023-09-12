import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-center bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link ">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active">Login-in</Link>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link active">Sign-in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
