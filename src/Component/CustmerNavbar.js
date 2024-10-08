
import React from "react";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

const CustmerNavbar = ({ darkTheme }) => {

  return (
    <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent'} `}>
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">Book<span className="text-orange">Lish</span></a>

        <nav className="nav-links-container">
    
        <Link className="nav-links" to="/">Home</Link>
          <Link className="nav-links" to="/products">Books</Link>
          <Link className="nav-links" to="/login">Login</Link>
          <Link className="nav-links" to="/Register">SignUp</Link>
          
        </nav>
      </div>
    </section>

  )
}

export default CustmerNavbar;