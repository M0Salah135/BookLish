import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../Store/CartContext';
import Button from 'react-bootstrap/esm/Button';

function CartList() {
  const {cart, addToCart,removeFromCart} = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <ListGroup as="ol" numbered>
    {cart.map((item, id, arr) => (
      <ListGroup.Item key={id}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
      <Image
            src={item.imageUrl}
            className="square-img object-fit-cover border rounded-circle"
          />
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.title}</div>
          {item.price} EGP
        </div>
        <Badge bg="primary" pill>
          {item.quantity}
        </Badge>
        <Button variant="Detail" onClick={() => removeFromCart(item)}>Remove</Button>

        </ListGroup.Item>
    ))}  
    <div>Total: {total} EGP</div>
    </ListGroup>
    
  );
}

export default CartList;