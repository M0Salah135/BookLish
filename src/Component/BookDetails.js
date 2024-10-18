import { useContext, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";
import CustmerCards from "./BookCard";
import CustmerNavbar from "./CustmerNavbar";

function BookDetails() {
  const params = useParams();
  const [comment, setComment] = useState("");
  const { books, updateBooks } = useContext(BooksContext);
  const productIdx = books.findIndex((book) => book.id === params.id);
  const founded = books[productIdx];

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
      <Stack direction="horizontal" gap={2} className="justify-content-center">
        <CustmerCards
          title={founded.title}
          price={founded.price}
          description={founded.description}
          imageUrl={founded.imageUrl}
          id={founded.id}
        />
        <Stack direction="vertical" gap={2} className="align-items-center">
          <Form.Label htmlFor="comment">Comment</Form.Label>
          <Form.Control
            type="text"
            id="comment"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <Button variant="primary" className="w-50" onClick={addComment}>
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
}

export default BookDetails;

