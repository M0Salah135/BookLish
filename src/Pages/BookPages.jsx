import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import CustmerCards from "../Component/CustmerCards";
import Image from "react-bootstrap/Image";


const bookPages = [
    {
        title: "Story1", price: 500, desc: "ome quick example text to build on the card title and make", img: "https://placehold.co/200x300",
    },
    {
        title: "Novel", price: 10, desc: "Some quick example text to build on the card title and make ", img: "https://placehold.co/200x300",
    },
    {
        title: "Artical", price: 43, desc: "ome quick example text to build on the card title and make", img: "https://placehold.co/200x300",
    },
    {
        title: "Story2", price: 43, desc: "ome quick example text to build on the card title and make", img: "https://placehold.co/200x300",
    },
    {
        title: "Story3", price: 43, desc: "ome quick example text to build on the card title and make", img: "https://placehold.co/200x300",
    },
    {
        title: "Story4", price: 43, desc: "ome quick example text to build on the card title and make", img: "https://placehold.co/200x300",
    },]

function BookPages() {

    return bookPages.map((item, idx, arr) => (
        <ListGroup.Item
          key={item.title}
          as="li"
          className="d-flex gap-3 justify-content-between align-items-start"
        >
          <div className="">
            <Image
              src={item.img}
              className="square-img object-fit-cover border rounded-circle"
            />
          </div>
          <div className="fs-2 fw-bolder me-auto">
            {item.title}{" "}
            <span className="fs-4 fw-normal">x{item.quantity ?? 0}</span>
          </div>
          <Stack className="ms-aut0 flex-grow-0">
            <div className="mt-auto fs-4 fw-semibold p-1">{item.price}EGP</div>
          </Stack>
        </ListGroup.Item>
      )
    );
    
}



export default BookPages;
