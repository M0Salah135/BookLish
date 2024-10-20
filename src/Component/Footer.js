
import React from 'react';
import '../index.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/AuthContext';

const CustmerFooter = () => {

  const { user, logout } = useAuth();
  return (
    <footer className="footer-container" >
      <div className="container" >
        <div className="footer-left">
          <a href="#" className="logo">Book<span className="text-orange">Lish</span></a>
          <p>&copy; {new Date().getFullYear()} BookLish. All rights reserved.</p>
        </div>

        <div className="footer-center">
          <ul className="footer-links">
            <Link className="nav-links " to="/">Home</Link>
            <Link className="nav-links" to="/products">Books</Link>
            <>{user ? (
              <Link onClick={logout} className="nav-links">Logout</Link>
            ) : (
              <Link className="nav-links" to="/login">Login/Signup</Link>
            )}
            </>
          </ul>
        </div>

        <div className="footer-right">
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default CustmerFooter;