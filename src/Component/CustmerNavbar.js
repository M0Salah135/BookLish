import React, { useContext, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useAuth } from "../Store/AuthContext";
import { CartContext } from "../Store/CartContext";
import "./navbar.styles.css";

const CustmerNavbar = ({ darkTheme }) => {
  const { cart, wishlist } = useContext(CartContext);
  const { user, logout } = useAuth();

  // تتبع حالة القائمة الجانبية
  const [isOpen, setIsOpen] = useState(false);

  // دالة لفتح وإغلاق القائمة الجانبية
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`navbar-container ${
        darkTheme ? "background-dark relative" : "background-transparent"
      } `}
    >
      <div className="container flex justify-between align-center">
        <Link to="/" className="logo">
          Book<span className="text-orange">Lish</span>
        </Link>

        {/* زر لفتح القائمة الجانبية */}
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        {/* القائمة الجانبية */}
        <nav className={`nav-links-container ${isOpen ? "open" : ""}`}>
          <Link className="nav-links " to="/">
            Home
          </Link>
          <Link className="nav-links" to="/products">
            Books
          </Link>
          <>
            {user ? (
              <>
                <Link className="nav-links" to="/wishlist">
                  WishList <Badge bg="danger">{wishlist.length}</Badge>
                </Link>
                <Link className="nav-links" to="/cart">
                  Cart <Badge bg="danger">{cart.length}</Badge>
                </Link>
                <span className="nav-links text-orange">
                  {user.firstname}
                </span>
                <Link onClick={logout} className="nav-links">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-links" to="/login">
                  Login
                </Link>
                <Link className="nav-links" to="/register">
                  Signup
                </Link>
              </>
            )}
          </>
        </nav>
      </div>
    </section>
  );
};

export default CustmerNavbar;
