// Create a list of books with their details
import { useContext, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import BookCard from "../Component/BookCard";
import { BooksContext } from "../Store/BooksContext";
import InnerCover from "../Component/InnerCover";

/**
 * Component to display a list of books
 * @returns {JSX.Element}
 */
function BooksList({ showPagination = true , showSearch = true}) {
  // Get the list of books from the context
  const { books } = useContext(BooksContext);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  // Calculate the indices for slicing the books array
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Pagination logic
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  return (
    <div className="py-5 list">
      {showSearch && (
        <InnerCover/>
      )}
      {/* Title of the book list */}
      <h3
        style={{ textAlign: "center", textShadow: "0px 0px 10px #fff" }}
        className="pt-5"
      >
        Welcome to our{" "}
        <span
          className="text-orange"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          List of Books
        </span>
      </h3>
      <Container className="pt-5">
        <Row xs={1} md={2} lg={4} className="g-4">
          {/* Map through the list of books and display each book card */}
          {currentBooks.slice(0, 12).map((item, idx) => (
            <Col key={idx}>
              <BookCard
                title={item.title}
                price={item.price}
                description={item.description}
                imageUrl={item.imageUrl}
                id={item.id}
                stock={item.stock}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {showPagination && (
        <Pagination className="justify-content-center mt-4">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
    </div>
  );
}

export default BooksList;
