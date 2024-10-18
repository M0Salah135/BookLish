import { useContext, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../Store/CartContext';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { ButtonGroup, Container, Stack, ToggleButton } from 'react-bootstrap';
import toast from 'react-hot-toast';



const radios = [
  { name: "Cash", value: "1" },
  { name: "Credit", value: "2" },
  { name: "Vodafone cash", value: "3" },
];

function CartList() {
  const [radioValue, setRadioValue] = useState("1");
  const navigate = useNavigate();

  const {cart, addToCart,removeFromCart,decreasCount} = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderList = useMemo(() => {
    return cart.map((item, idx, arr) => (
      <ListGroup.Item
        key={item.title}
        as="li"
        className="d-flex gap-3 justify-content-between align-items-start"
      >
        <div className="">
          <Image
            src={item.imageUrl}
            className="square-img object-fit-cover border rounded-circle"
          />
        </div>
        <div className="fs-2 fw-bolder me-auto">
          {item.title}{" "}
          <span className="fs-4 fw-normal">x{item.quantity ?? 0}</span>
        </div>
        <Stack gap={2} direction="horizontal">
            <Stack direction="horizontal" gap={2}>
              <Button variant="primary" onClick={() => addToCart(item)}>+</Button>
              <Button variant="danger" onClick={() => decreasCount(item)}>-</Button>
            </Stack>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(item)}>Remove</Button>
          </Stack>

      </ListGroup.Item>
    ));
  }, [cart]);

  return (
    <Container className="pt-5">
      <ListGroup as="ol" className="gap-4">
        {renderList}
      </ListGroup>
      <h4 className="mt-2">Details</h4>
      <p>{total}EGP</p>
      <hr />
      <Stack gap={3}>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>

        <Button
          variant="success"
          onClick={() => {
            if (total > 0) navigate("/checkout");
            else toast.error("Your cart is empty!");
          }}
        >
          Checkout
        </Button>
      </Stack>
    </Container>
  );
}

export default CartList;
