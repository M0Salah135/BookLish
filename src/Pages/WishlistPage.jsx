
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../Component/BookCard";
import { CartContext } from "../Store/CartContext";
import CustmerNavbar from "../Component/CustmerNavbar";
import LogCover from "../Component/LogCover";
import { Link } from "react-router-dom";

function WishList() {
  const { wishlist } = useContext(CartContext);
return (
  <div>
<CustmerNavbar/>
<LogCover/>
    <div className="search-results-container">
      <h1>My Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul className="book-list">
          {wishlist.map((item, idx, arr) => (
            <li key={item.id} className="book-item">

              <section className="cart-item">
                <div className="cart-item-img-container">
                  {/* Display book image */}
                  <img src={item.imageUrl} alt={item.title} className="cart-item-img" />
                </div>

                <div className="cart-item-content-container">
                  <h2>{item.title}</h2>
                  <p>{item.author}</p>

                  {/* Link to book details page */}
                  <Link to={`../book/${item.id}`} className="button-primary">
                    Product Details
                  </Link>
                </div>
              </section>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books in Your Wishlist</p>
      )}
    </div>
  </div>
);
}

export default WishList;