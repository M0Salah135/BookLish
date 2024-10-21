import { useContext, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";
import { CartContext } from "../Store/CartContext";
import CustmerNavbar from "./CustmerNavbar";
import './detailsSection.styles.css';

const BookDetails = () => {
  // Get the URL parameters
  const params = useParams();

  // State to hold the comment input
  const [comment, setComment] = useState("");

  // Get the books context and update function
  const { books, updateBooks } = useContext(BooksContext);

  // Find the index of the selected book
  const productIdx = books.findIndex((book) => book.id === params.id);
  const founded = books[productIdx];

  // Get the addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // Function to add a comment to the book
  const addComment = () => {
    // Create a new comment object
    const commentArray = founded.comment
      ? [
          {
            title: comment,
            date: new Date(),
          },
          ...founded.comment,
        ]
      : [
          {
            title: comment,
            date: new Date(),
          },
        ];

    // Update the book with the new comment
    const newProductObject = { ...founded, comment: commentArray };
    books[productIdx] = newProductObject;

    // Update the books context with the updated book
    updateBooks([...books]);
    setComment('');
  };

  // If the book is not found, display a message
  if (!founded) return <Container>No found</Container>;

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
                  <p className="text-primary"><b>{founded.author}</b></p>
                  <p className="book-description">{founded.description}</p>
                  <p><b>Category</b>: {founded.category}</p>
                  <p><b>Book Stock</b>: {founded.stock}</p>
                  <h3>{founded.price} EGP</h3>

                  {/* Add to cart button */}
                  <Button className="button-primary" onClick={() => {
                      const productDetails = {
                        'title': founded.title,
                        'img': founded.imageUrl,
                        'id': founded.id,
                        'description': founded.description,
                        'author': founded.author,
                        'price': founded.price
                      };
                      addToCart(productDetails);
                    }}>
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Comment input and button */}
          <Stack direction="Vertical" gap={2} className="justify-content-center">
            <Form.Label htmlFor="comment" style={{ maxWidth: '500px',margin: '0 auto' }}>Comment</Form.Label>
            <Form.Control
            style={{ maxWidth: '500px',margin: '0 auto', minWidth: '600px' }}
            className="justify-content-between"
              type="text"
              id="comment"
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
            <Button className="button-primary" style={{ maxWidth: '500px',margin: '0 auto' }} onClick={addComment}>
              Add comment
            </Button>

            {/* Display existing comments */}
            {founded.comment?.map((item, index) => (
              <Stack direction="horizontal" gap={2} key={index} style={{ width: '500px',margin: '0 auto' }}
              className="justify-content-between">
                <p className="w-50 text-left">{item.title}</p>
                <p className="w-20 text-right">{item.date.toLocaleDateString()}</p>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default BookDetails;

