



import { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";

function RecentAdd() {
  const { books } = useContext(BooksContext);
  const [newBooks, setNewBooks] = useState(books.slice(-12));
  const chunkedItems = [];
  for (let i = 0; i < books.length; i += 4) {
    chunkedItems.push(newBooks.slice(i, i + 4));
  }
  return (
    <div className="recent-add-section" style={{ backgroundColor: 'rgb(255 69 0)', padding: '50px 0', marginTop: '10px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '10px', color: 'rgb(247 243 243)', fontWeight: 'bold' }}>
        Newly Added Books
      </h3>
      <Carousel data-bs-theme="dark" indicators={false} controls={true} interval={3000}>
        {chunkedItems.map((itemsGroup, idx) => (
          <Carousel.Item key={idx} style={{ padding: '5px 0' }}>
            <Container className="d-flex justify-content-around">
              <Row  className="col-lg-12 g-4">
                {itemsGroup.map((item, index) => (
                  <Col key={index}>
                    <Link to={`../book/${item.id}`}><Image src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%' }} />
              
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default RecentAdd;