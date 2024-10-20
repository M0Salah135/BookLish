import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../Component/BookCard";
import "../Pages/BookList.css";
import { BooksContext } from "../Store/BooksContext";




function BooksList() {

    const {books} = useContext(BooksContext);
    return (
        <div className="pt-5 list">
            <h3 style={{ textAlign: 'center', textShadow: '0px 0px 10px #fff' }} className="pt-5" >Welcome to our <span className= "text-orange" style={{ textShadow: '0px 0px 10px black' }}>List of Books </span></h3>
            <Container className="pt-5 "  >

                <Row xs={1} md={2} lg={4} className="g-4">
                    {books.map((item, idx, arr) => (
                        <Col key={idx}>
                            <BookCard 
                            title={item.title} 
                            price={item.price} 
                            description={item.description} 
                            imageUrl={item.imageUrl} 
                            id={item.id} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BooksList;
