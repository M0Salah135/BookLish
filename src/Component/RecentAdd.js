



import { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";

function RecentAdd() {
  // Get the books from the context
  const { books } = useContext(BooksContext);

  // Create a new state and set it to the last 12 books
  const [newBooks, setNewBooks] = useState(books.slice(-12));

  // Create an empty array to store the chunked items
  const chunkedItems = [];

  // Loop over the books and chunk them into groups of 4
  for (let i = 0; i < books.length; i += 4) {
    chunkedItems.push(newBooks.slice(i, i + 4));
  }

  // Return the component
  return (
    <div className="recent-add-section" style={{ backgroundColor: 'rgb(255 69 0)', padding: '50px 0', marginTop: '10px' }}>
      {/* Title of the section */}
      <h3 style={{ textAlign: 'center', marginBottom: '10px', color: 'rgb(247 243 243)', fontWeight: 'bold' }}>
        Newly Added Books
      </h3>
      {/* Carousel component */}
      <Carousel data-bs-theme="dark" indicators={false} controls={true} interval={3000}>
        {/* Loop over the chunked items and render a carousel item for each */}
        {chunkedItems.map((itemsGroup, idx) => (
          <Carousel.Item key={idx} style={{ padding: '5px 0' }}>
            {/* Container to wrap the items */}
            <Container className="d-flex justify-content-around">
              {/* Row to wrap the items */}
              <Row  className="col-lg-12 g-4">
                {/* Loop over the items in the group and render a link for each */}
                {itemsGroup.map((item, index) => (
                  <Col key={index}>
                    {/* Link to the book details page */}
                    <Link to={`../book/${item.id}`}>
                      {/* Image of the book */}
                      <Image src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%' }} />
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
