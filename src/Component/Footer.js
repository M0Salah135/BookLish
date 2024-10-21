
import React from 'react';
import '../index.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/AuthContext';

/**
 * Footer component which displays the website's footer section.
 * @returns {React.ReactElement} The footer component.
 */
const CustmerFooter = () => {

  // Get the user's login status from the authentication context
  const { user, logout } = useAuth();

  return (
    <footer className="footer-container">
      {/* Container element that holds all the footer elements */}
      <div className="container">
        {/* Left side of the footer which contains the logo and copyright text */}
        <div className="footer-left">
          {/* Link that displays the logo */}
          <Link to="/" className="logo">Book<span className="text-orange">Lish</span></Link>
          {/* Copyright text */}
          <p>&copy; {new Date().getFullYear()} BookLish. All rights reserved.</p>
        </div>

        {/* Center section of the footer which contains the navigation links */}
        <div className="footer-center">
          {/* Unordered list of links */}
          <ul className="footer-links">
            {/* Link to the home page */}
            <li><Link className="nav-links" to="/">Home</Link></li>
            {/* Link to the products (books) page */}
            <li><Link className="nav-links" to="/products">Books</Link></li>
            {/* Conditional rendering of the login/logout link */}
            <li>
              {user ? (
                /* If the user is logged in, show the logout link */
                <Link onClick={logout} className="nav-links">Logout</Link>
              ) : (
                /* If the user is not logged in, show the login/signup link */
                <Link className="nav-links" to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>

        {/* Right side of the footer which contains the social media links */}
        <div className="footer-right">
          {/* Unordered list of social media links */}
          <ul className="social-links">
            {/* Facebook link */}
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            {/* Twitter link */}
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            {/* Instagram link */}
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default CustmerFooter;
