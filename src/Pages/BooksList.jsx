// Create a list of books with their details
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../Component/BookCard";
import { BooksContext } from "../Store/BooksContext";

/**
 * Component to display a list of books
 * @returns {JSX.Element}
 */
function BooksList() {
    // Get the list of books from the context
    const { books } = useContext(BooksContext);

    return (
        <div className="pt-5 list">
            {/* Title of the book list */}
            <h3 style={{ textAlign: 'center', textShadow: '0px 0px 10px #fff' }} className="pt-5">
                Welcome to our <span className="text-orange" style={{ textShadow: '0px 0px 10px black' }}>List of Books</span>
            </h3>
            <Container className="pt-5">
                <Row xs={1} md={2} lg={4} className="g-4">
                    {/* Map through the list of books and display each book card */}
                    {books.map((item, idx) => (
                        <Col key={idx}>
                            <BookCard
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                id={item.id}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BooksList;

