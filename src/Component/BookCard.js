import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../index.css";
import { CartContext } from "../Store/CartContext";

/**
 * A react component that displays a single book's details
 *
 * @param {{title: string, description: string, price: number, id: string, imageUrl: string}} props
 * The properties of the book to be displayed
 * @returns {JSX.Element}
 */
function BookCard({ title, description, price, id, imageUrl , stock}) {
  // Get the functions to manipulate the cart and wishlist from the context
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } =
    useContext(CartContext);

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
      <Card style={{ width: "90%" }}>
        <Card.Img variant="top" src={imageUrl} style={{ maxHeight: "300px" }} />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            {price}.EGP{" "}
            {ifInWishlist() ? (
              // If the book is in the wishlist, show a button to remove it
              <Button
                size="sm"
                variant="danger"
                style={{ fontSize: "0.7rem" }}
                onClick={() => {
                  const productDetails = {
                    title,
                    imageUrl,
                    description,
                    price,
                    id,
                    stock,
                  };
                  // Remove the book from the wishlist
                  removeFromWishlist(productDetails);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </Button>
            ) : (
              // If the book is not in the wishlist, show a button to add it
              <Button
                size="sm"
                style={{ fontSize: "0.7rem" }}
                variant="outline-secondary"
                onClick={() => {
                  const productDetails = {
                    title,
                    imageUrl,
                    description,
                    price,
                    id,
                    stock,
                  };
                  // Add the book to the wishlist
                  addToWishlist(productDetails);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </Button>
            )}
          </Card.Text>
          <Row xs={1} md={2} className="g-2">
            <Col>
              <Button
                className="w-100"
                variant="warning"
                style={{ fontSize: "0.7rem" }}
                onClick={() => {
                  const productDetails = {
                    title,
                    imageUrl,
                    description,
                    price,
                    id,
                    stock,
                  };
                  // Add the book to the cart
                  addToCart(productDetails);
                }}
              >
                Add to cart
              </Button>
            </Col>
            <Col>
              <Button
                variant="secondary"
                className="w-100"
                style={{ fontSize: "0.7rem" }}
                as={Link}
                to={`../book/${id}`}
              >
                Details
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BookCard;
