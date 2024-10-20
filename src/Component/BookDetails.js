import { useContext, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";
import CustmerCards from "./BookCard";
import CustmerNavbar from "./CustmerNavbar";
import './detailsSection.styles.css';
import { CartContext } from "../Store/CartContext";

const BookDetails = () => {
  const params = useParams();
  const [comment, setComment] = useState("");
  const { books, updateBooks } = useContext(BooksContext);
  const productIdx = books.findIndex((book) => book.id === params.id);
  const founded = books[productIdx];
  const { addToCart } = useContext(CartContext);

  const addComment = () => {
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

    const newProductObject = { ...founded, comment: commentArray };
    books[productIdx] = newProductObject;

    updateBooks([...books]);
    setComment('');
  };

  if (!founded) return <Container>No found</Container>;

  return (
    <div>
    <CustmerNavbar darkTheme={true}/>
      
        <Stack direction="vertical" gap={2} className="align-items-center">
        <Stack direction="Vertical" gap={2} className="justify-content-center">
      <section className="detaicontainerl-section-">
            <div className="container-box">
                <div className="flex-container">
                    <div className="book-img-container">
                        <img src={founded.imageUrl} alt="book" />
                    </div>

                    <div className="book-detail-container">
                        <h2>{founded.title}</h2>
                        <p className="text-primary"><b>{founded.author}</b></p>
                        <p className="book-description">{founded.description}</p>
                        <p><b>Category</b>: {founded.category}</p>
                        <p><b>Book Stock</b>: {founded.stock}</p>
                        <h3>{founded.price} EGP</h3>

                        <Button className="button-primary" onClick={() => {
                            const productDetails = { 'title':founded.title, 'img':founded.imageUrl,'id': founded.id , 'description': founded.description,'author':founded.author ,'price':founded.price};
                            addToCart(productDetails);
                        }}>Add To Cart
                        </Button >
                    </div>

                </div>               
              </div>
        </section >
          <Form.Label htmlFor="comment">Comment</Form.Label>
          <Form.Control
            type="text"
            id="comment"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <Button className="button-primary" style={{maxWidth: '200px'}} onClick={addComment}>
            Add comment
          </Button>
          {founded.comment?.map((item, index) => (
            <Stack direction="horizontal" gap={2} key={index}>
              <p className="w-50 text-left">{item.title}</p>
              <p className="w-20 text-right">{item.date.toLocaleDateString()}</p>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default BookDetails;

