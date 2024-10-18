import { useContext, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";
import CustmerCards from "./BookCard";

function BookDetails() {
  const params = useParams();
  const [comment, setComment] = useState("");
  const { books, updateBooks } = useContext(BooksContext);
  const productIdx = books.findIndex((book) => book.id === params.id);
  const founded = books[productIdx];

  const addComment = () => {
    const commentArray = founded.comment
      ? [
          ...founded.comment,
          {
            title: comment,
            date: new Date(),
          },
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
  };

  if (!founded) return <Container>No found</Container>;

  return (
    <div>
      <CustmerCards
        title={founded.title}
        price={founded.price}
        description={founded.description}
        imageUrl={founded.imageUrl}
      />
      <Stack direction="vertical" gap={2}>
        <Form.Label htmlFor="comment">Comment</Form.Label>
        <Form.Control
          type="text"
          id="comment"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button variant="primary" onClick={addComment}>
          Add comment
        </Button>
        {founded.comment?.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </Stack>
    </div>
  );
}

export default BookDetails;

