import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../Component/BookCard";
import CustmerNavbar from "../Component/CustmerNavbar";
import data from "../Data/data.json";




function BooksList() {

    const [books, setBooks] = useState(data.books);
    const [users, setUsers] = useState(data.users);
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>List of Our Books</h3>
            <Container className="pt-5" BackgroundColor="Orange">

                <Row xs={1} md={2} lg={4} className="g-4">
                    {books.map((iteam, idx, arr) => (
                        <Col key={idx}>
                            <BookCard title={iteam.title} price={iteam.price} description={iteam.description} imageUrl={iteam.imageUrl} id={iteam.id} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BooksList;
