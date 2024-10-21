import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useNavigate, useParams } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";
import { CartContext } from "../Store/CartContext";
import CustmerNavbar from "./CustmerNavbar";
import "./detailsSection.styles.css";

const BookDetails = () => {
  // Get the URL parameters
  const params = useParams();

  // Get Navigation
  const navigate = useNavigate();

  // Get the books context and update function
  const { books } = useContext(BooksContext);

  // Find the index of the selected book
  const productIdx = books.findIndex((book) => book.id === params.id);
  const founded = books[productIdx];

  // Get the addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // If the book is not found, display a message
  if (!founded) return <Container>No found</Container>;

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(founded);
    navigate("/cart");
  };

  return (
    <div>
      {/* Display the navbar */}
      <CustmerNavbar darkTheme={true} />

      {/* Main content section */}
      <Stack direction="vertical" gap={2} className="align-items-center">
        <Stack direction="Vertical" gap={2} className="justify-content-center">
          {/* Book details section */}
          <section className="detaicontainerl-section-">
            <div className="container-box">
              <div className="flex-container">
                {/* Book image */}
                <div className="book-img-container">
                  <img src={founded.imageUrl} alt="book" />
                </div>

                {/* Book details */}
                <div className="book-detail-container">
                  <h2>{founded.title}</h2>
                  <p className="text-primary">
                    <b>{founded.author}</b>
                  </p>
                  <p className="book-description">{founded.description}</p>
                  <p>
                    <b>Category</b>: {founded.category}
                  </p>
                  <p>
                    <b>Book Stock</b>: {founded.stock}
                  </p>
                  <h3>{founded.price} EGP</h3>

                  {/* Add to cart button */}
                  <Button className="button-primary" onClick={handleAddToCart}>
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Stack>
      </Stack>
    </div>
  );
};

export default BookDetails;
