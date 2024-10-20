import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustmerNavbar from "../Component/CustmerNavbar";
import LogCover from "../Component/LogCover";
import { CartContext } from "../Store/CartContext";

/**
 * The WishList component displays a list of books in the user's wishlist.
 *
 * @returns {JSX.Element}
 */
function WishList() {
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext);

  return (
    <div>
      <CustmerNavbar />
      <LogCover />

      <div className="search-results-container">
        <h1>My Wishlist</h1>

        {wishlist.length > 0 ? (
          <ul className="book-list list-group">
            {wishlist.map((item, idx, arr) => (
              <li key={item.id} className="book-item">
                {/* Display book image and details in a section */}
                <section className="cart-item justify-content-between">
                  <div>
                    {/* Display book image */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="cart-item-img img-fluid"
                    />
                  </div>

                  <div className="cart-item-content-container">
                    <h2>{item.title}</h2>
                    <p>{item.author}</p>

                    {/* Link to book details page */}
                    <Link to={`../book/${item.id}`} className="button-primary">
                      Product Details
                    </Link>
                  </div>
                  {/* Add to cart button */}
                  <div>
                    <Button
                      size="sm"
                      className="ms-2"
                      variant="success"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                  {/* Remove from wishlist button */}

                  <div>
                    <Button
                      size="sm"
                      className="ms-2"
                      variant="danger"
                      onClick={() => removeFromWishlist(item)}
                    >
                      Remove from Wishlist
                    </Button>
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
