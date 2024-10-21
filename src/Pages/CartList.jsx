import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import CustmerNavbar from '../Component/CustmerNavbar';
import LogCover from '../Component/LogCover';
import { CartContext } from '../Store/CartContext';
import './cart.css'; 


/**
 * This component displays the cart page and allows the user to manage their cart items
 * @returns {JSX.Element}
 */
function CartList() {
  // Get the cart items and functions from the CartContext
  const {cart, addToCart, removeFromCart, decreasCount} = useContext(CartContext);
  // Calculate the total price of items in the cart
  const total = Math.round(cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100;

  return (
    <div>
      {/* Display the navbar */}
      <CustmerNavbar />
      {/* Show the cover */}
      <LogCover />
      {/* Main cart page */}
      <div className="cart-page">
        <Row className="g-4">
          {/* Cart Items */}
          <Col md={8}>
            <Card className="p-3">
              <h4 className="mb-3">Shopping Cart</h4>
              <ListGroup as="ol" numbered>
                {cart.map((item, id) => (
                  <ListGroup.Item
                    key={id}
                    as="li"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center">
                      <Image
                        src={item.imageUrl}
                        width={80}
                        className="cart-item-img rounded me-3"
                        alt={item.title}
                      />
                      <div>
                        <div className="fw-bold">{item.title}</div>
                        <div>{item.price} EGP</div>
                      </div>
                    </div>

                    {/* Quantity control */}
                    <div className="quantity-control d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        className="btn-sm"
                        onClick={() => decreasCount(item)}
                      >
                        -
                      </Button>
                      <Badge bg="primary" className="mx-2">
                        {item.quantity}
                      </Badge>
                      <Button
                        variant="outline-secondary"
                        className="btn-sm"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                    </div>
                    {/* Remove item button */}
                    <Button
                      variant="danger"
                      className="ms-3"
                      onClick={() => removeFromCart(item)}
                    >
                      &#10005;
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
            {/* Back to shop link */}
            <div className="mt-3">
              <a href="/" className="text-decoration-none">
                &#8592; Back to shop
              </a>
            </div>
          </Col>

          {/* Summary */}
          <Col md={4}>
            <Card className="p-3">
              <h5>Summary</h5>
              <div className="d-flex justify-content-between">
                <span>ITEMS {cart.length}</span>
                <span>{total} EGP</span>
              </div>
              <div className="mt-2">
                <span>SHIPPING</span>
                <p className="mb-1">Standard-Delivery &#8211; 5.00 EGP</p>
              </div>
              <div className="my-3">
                <span>GIVE CODE</span>
                <input type="text" placeholder="Enter your code" className="form-control" />
              </div>
              <div className="d-flex justify-content-between fw-bold">
                <span>TOTAL PRICE</span>
                <span>{total + 5} EGP</span>
              </div>
              <Button variant="dark" className="mt-3 w-100">
                Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CartList;

