import { Col, Container, Row } from "react-bootstrap";
import CustmerCards from "../Component/CustmerCards";
import imageso from "../Pages/imges/4.jpg";
import CustmerNavbar from "../Component/CustmerNavbar";
import InnerCover from "../Component/InnerCover";
import { BooksContext } from "../Store/BooksContext";
import { useContext } from "react";
import { useState } from "react";
import data from "../Data/data.json";




function ProductList() {

  const [books, setBooks] = useState(data.books);
  const [users, setUsers] = useState(data.users);
    return (
      <div>
           <CustmerNavbar />
           <h3 style={{ textAlign: 'center' }}>List of Our Books</h3>
        <Container className="pt-5">
          
            <Row xs={1} md={2} lg={4} className="g-4">
                {books.map((iteam, idx, arr) => (
                    <Col key={idx}>
                        <CustmerCards title={iteam.title} price={iteam.price} desc={iteam.desc} img={iteam.imageUrl} />
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
);
}

export default ProductList;
