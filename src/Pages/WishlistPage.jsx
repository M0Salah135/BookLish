
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../Component/BookCard";
import { CartContext } from "../Store/CartContext";

function WishList() {
  const { wishlist } = useContext(CartContext);
  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {wishlist.map((item, idx, arr) => (
          <Col key={idx}>
          <BookCard title={item.title} price={item.price} description={item.description} imageUrl={item.imageUrl} id={item.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WishList;