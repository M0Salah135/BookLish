import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link for navigation
import './SearchResulat';
import './searchresultcard.styles.css';
import CustmerNavbar from './CustmerNavbar';
import LogCover from './LogCover';
import { BooksContext } from '../Store/BooksContext';


const SearchResulat = () => {
  const{books}=useContext(BooksContext);
  const location = useLocation();
  const query = location.state; // Retrieve the search query from the state

  // Filter books based on the search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
<CustmerNavbar/>
<LogCover/>
      <div className="search-results-container">
        <h1>Search Results for: {query}</h1>
        {filteredBooks.length > 0 ? (
          <ul className="book-list">
            {filteredBooks.map((book) => (
              <li key={book.id} className="book-item">

                <section className="cart-item">
                  <div>
                    {/* Display book image */}
                    <img src={book.imageUrl} alt={book.title} className="cart-item-img" />
                  </div>

                  <div className="cart-item-content-container">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>

                    {/* Link to book details page */}
                    <Link to={`../book/${book.id}`} className="button-primary">
                      Product Details
                    </Link>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found matching your query.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResulat;