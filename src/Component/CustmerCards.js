import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageso from "../Pages/imges/4.jpg";
import '../index.css';


function CustmerCards({ img, title, price, desc }) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '90%' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}  -  {price}.EGP
          </Card.Text>
          <div class="d-flex gap-3">
            <a href="#" class="btn btn-secondary btn-sm" gap-3>Details</a>
            <a href="#" class="btn btn-orange btn-sm">Add To Cart</a>
          </div>


        </Card.Body>
      </Card>

    </div>

  )
}
export default CustmerCards;