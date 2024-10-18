import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../index.css';
import { Button, Stack } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../Store/CartContext';
import toast from "react-hot-toast";



function BookCard({ title, description, price, id, imageUrl }) {
  const { cart, addToCart, addToWishlist, removeFromWishlist, wishlist } = useContext(CartContext)
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
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}  -  {price}.EGP
          </Card.Text>
          <Stack gap={2}>
          <Button
            variant="success"
            onClick={() => {
              const productDetails = { title, imageUrl, description, price,id };
              addToCart(productDetails);
              toast.success("Product Added!");
            }}
          >
            Add to cart
          </Button>
          {ifInWishlist() ? (
            <Button
              variant="danger"
              onClick={() => {
                const productDetails = { title, imageUrl, description, price };
                removeFromWishlist(productDetails);
              }}
            >
              Remove from wishlist
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                const productDetails = { title, imageUrl, description, price };
                addToWishlist(productDetails);
              }}
            >
              Add to wishlist
            </Button>
          )}

          <Button variant="secondary" as={Link} to={`book/${id}`}>
            Details
          </Button>
        </Stack>
        </Card.Body>
      </Card>

    </div>

  )
}
export default BookCard;