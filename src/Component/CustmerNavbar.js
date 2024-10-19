
import React, { useContext } from "react";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import { CartContext } from "../Store/CartContext";
import { useAuth } from "../Store/AuthContext";

const CustmerNavbar = ({ darkTheme }) => {
  const { cart, addToCart, wishlist } = useContext(CartContext);
  const { user, logout } = useAuth();
 

  return (
    <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent'} `}>
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">Book<span className="text-orange">Lish</span></a>

        <nav className="nav-links-container">
    
        <Link className="nav-links " to="/">Home</Link>
          <Link className="nav-links" to="/products">Books</Link>
          <>
        {user ? (
          <>
            <span  className="nav-links text-orange">  Welcome, {user.firstname}</span>
            <Link onClick={logout} className="nav-links">Logout</Link>
          </>
        ) : (
          <Link className="nav-links" to="/login">Login</Link>
        )}
      </>
          <Link className="nav-links" to="/Register">SignUp</Link>
          <Link className="nav-links" to="/wishlist">WishList<Badge bg="danger">{wishlist.length}</Badge></Link>
          <Link className="nav-links" to="/cart">Cart<Badge bg="danger">{cart.length}</Badge></Link>
          
        </nav>
      </div>
    </section>

  )
}

export default CustmerNavbar;