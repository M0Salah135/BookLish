import { Col, Container, Row } from "react-bootstrap";
import CustmerCards from "../Component/CustmerCards";
import imageso from "../Pages/imges/4.jpg";
import CustmerNavbar from "../Component/CustmerNavbar";
import InnerCover from "../Component/InnerCover";

const productList = [
    {
        id: 1,
        title: "The Shadow of Time",
        author: "Arthur Blackwood",
        category: "Science Fiction",
        price: 19.99,
        desc: "A thrilling journey through space and time where humanity's future depends on one man's choices.",
        "stock": 12,
        img: "https://placehold.co/400x500"
      },
      {
        id: 2,
        title: "Winds of the North",
        author: "Sylvia Brooks",
        category: "Adventure",
        price: 14.99,
        desc: "An epic tale of survival and resilience in the harsh northern wilderness.",
        "stock": 8,
        img: "https://placehold.co/400x500"      },
      {
        id: 3,
        title: "The Forgotten Empire",
        author: "James Crowley",
        category: "Historical Fiction",
        price: 17.99,
        desc: "A gripping story about an ancient empire lost in the sands of time.",
        "stock": 5,
        img: "https://placehold.co/400x500"      },
      {
        id: 4,
        title: "Whispers in the Dark",
        author: "Elaine Moon",
        category: "Horror",
        price: 10.99,
        desc: "A chilling tale of hauntings and nightmares in a remote village.",
        "stock": 20,
        img: "https://placehold.co/400x500"      },
      {
        id: 5,
        title: "Journey to the Abyss",
        author: "Mason Clarke",
        category: "Fantasy",
        price: 15.99,
        desc: "An extraordinary quest to the depths of the world where ancient powers lie.",
        "stock": 15,
        img: "https://placehold.co/400x500"      },
      {
        id: 6,
        title: "The Last Martian",
        author: "Clara Green",
        category: "Science Fiction",
        price: 13.99,
        desc: "In a distant future, the last surviving Martian seeks to preserve their dying race.",
        "stock": 7,
        img: "https://placehold.co/400x500"      },
      {
        id: 7,
        title: "Murder at Midnight",
        author: "Louis Clark",
        category: "Mystery",
        price: 11.99,
        desc: "A detective must unravel a web of lies before another victim falls.",
        "stock": 10,
        img: "https://placehold.co/400x500"      },
      {
        id: 8,
        title: "The Enchanted Forest",
        author: "Diana Wynn",
        category: "Fantasy",
        price: 16.99,
        desc: "A young girl stumbles upon a magical forest filled with wonder and danger.",
        "stock": 22,
        img: "https://placehold.co/400x500"      },
      {
        id: 9,
        title: "Secrets of the Pharaoh",
        author: "Brian Taylor",
        category: "Historical Fiction",
        price: 18.99,
        desc: "An archaeologist uncovers a tomb that hides more than just treasure.",
        "stock": 9,
        img: "https://placehold.co/400x500"      },
      {
        id: 10,
        title: "Rise of the Machines",
        author: "Emma White",
        category: "Science Fiction",
        price: 12.99,
        desc: "In a world where AI controls everything, one woman fights for freedom.",
        "stock": 11,
        img: "https://placehold.co/400x500"      },
      {
        id: 11,
        title: "The Silent Observer",
        author: "Nancy Drew",
        category: "Thriller",
        price: 9.99,
        desc: "A chilling psychological thriller where nothing is as it seems.",
        "stock": 25,
        img: "https://placehold.co/400x500"      },
      {
        id: 12,
        title: "A War to End All Wars",
        author: "David Johnson",
        category: "Historical Fiction",
        price: 17.99,
        desc: "The untold story of the soldiers who fought in the trenches of World War I.",
        "stock": 13,
        img: "https://placehold.co/400x500"      },
      {
        id: 13,
        title: "The Queen's Gambit",
        author: "Isabelle Ross",
        category: "Fantasy",
        price: 14.99,
        desc: "A young sorceress must outwit her enemies to claim her rightful throne.",
        "stock": 14,
        img: "https://placehold.co/400x500"      },
      {
        id: 14,
        title: "Into the Abyss",
        author: "Kyle Adams",
        category: "Adventure",
        price: 15.99,
        desc: "A deep-sea diver discovers a hidden world beneath the ocean's surface.",
        "stock": 6,
        img: "https://placehold.co/400x500"      },
      {
        id: 15,
        title: "Heart of the Storm",
        author: "Hannah Lee",
        category: "Romance",
        price: 13.99,
        desc: "Two strangers find love amidst a devastating storm that changes their lives forever.",
        "stock": 30,
        img: "https://placehold.co/400x500"      },
      {
        id: 16,
        title: "The Lost Key",
        author: "William Hunt",
        category: "Mystery",
        price: 11.99,
        desc: "An ancient key unlocks secrets that were meant to stay hidden.",
        "stock": 19,
        img: "https://placehold.co/400x500"      },
      {
        id: 17,
        title: "Descent into Madness",
        author: "Rebecca Sharp",
        category: "Horror",
        price: 10.99,
        desc: "A psychological horror that explores the thin line between sanity and madness.",
        "stock": 21,
        img: "https://placehold.co/400x500"      },
      {
        id: 18,
        title: "The Art of War",
        author: "Sun Tzu",
        category: "Philosophy",
        price: 9.99,
        desc: "The timeless military strategy text that has influenced leaders for centuries.",
        "stock": 50,
        img: "https://placehold.co/400x500"      },
      {
        id: 19,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Adventure",
        price: 12.99,
        desc: "A philosophical novel that follows a young shepherd on his journey to find treasure.",
        "stock": 40,
        img: "https://placehold.co/400x500"      },
      {
        id: 20,
        title: "The Infinite Loop",
        author: "Terry Scott",
        category: "Science Fiction",
        price: 14.99,
        desc: "A coder trapped in a virtual reality must escape before the system crashes forever.",
        "stock": 17,
        img: "https://placehold.co/400x500"      }
   ]

function ProductList() {
    return (
      <div>
           <CustmerNavbar />
           <h3 style={{ textAlign: 'center' }}>List of Our Books</h3>
        <Container className="pt-5">
          
            <Row xs={1} md={2} lg={4} className="g-4">
                {productList.map((iteam, idx, arr) => (
                    <Col key={idx}>
                        <CustmerCards title={iteam.title} price={iteam.price} desc={iteam.desc} img={iteam.img} />
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
);
}

export default ProductList;
