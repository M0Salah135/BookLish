import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import { Button, Stack } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../Store/CartContext';
import toast from "react-hot-toast";



/**
 * A react component that displays a single book's details
 * 
 * @param {{title: string, description: string, price: number, id: string, imageUrl: string}} props
 * The properties of the book to be displayed
 * @returns {JSX.Element}
 */
function BookCard({ title, description, price, id, imageUrl }) {

  // Get the functions to manipulate the cart and wishlist from the context
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useContext(CartContext);

  /**
   * Check if the book is already in the wishlist
   * @returns {boolean} True if the book is in the wishlist, false otherwise
   */
  const ifInWishlist = () => {
    const idx = wishlist.findIndex((_product) => _product.title === title);
    if (idx > -1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '90%' }}>
      <Card.Img variant="top" src={imageUrl} style={{maxHeight:'300px'}} />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>
           {price}.EGP
          </Card.Text>
          <Stack gap={2} direction="vertical">
          <Stack direction="horizontal" className="justify-content-between">
          <Button ms-left className="me-1" size="sm" variant="warning" style={{fontSize:'0.7rem'}}
            onClick={() => {
              const productDetails = { title, imageUrl, description, price,id };
              // Add the book to the cart
              addToCart(productDetails);
              // Show a success message
              toast.success("Product Added!");
            }}
          >
          Add to cart
          </Button>
          {ifInWishlist() ? (
            // If the book is in the wishlist, show a button to remove it
            <Button
              
              size="sm"
              variant="danger"
              style={{fontSize:'0.7rem'}}
              onClick={() => {
                const productDetails = { title, imageUrl, description, price,id  };
                // Remove the book from the wishlist
                removeFromWishlist(productDetails);
              }}
            >
            Remove from wishlist
            </Button>
          ) : (
            // If the book is not in the wishlist, show a button to add it
            <Button
              size="sm"
              style={{fontSize:'0.7rem'}}
              variant="primary"
              onClick={() => {
                const productDetails = { title, imageUrl, description, price,id  };
                // Add the book to the wishlist
                addToWishlist(productDetails);
              }}
            >
            Add to wishlist
            </Button>
          )}
          </Stack>
          <Button variant="secondary" as={Link} to={`../book/${id}`}>
            Details
          </Button>
        </Stack>
        </Card.Body>
      </Card>

    </div>

  )
}
export default BookCard;
