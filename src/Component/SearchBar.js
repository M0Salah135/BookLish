import React, { useContext, useState } from "react";
import '../index.css';
import books from "../Data/data.json";
import { useNavigate } from "react-router-dom";
import { BooksContext } from "../Store/BooksContext";

const SearchInputForm = ({ darkTheme }) => {
    const [query, setQuery] = useState(''); // Store the input value
    const [suggestions, setSuggestions] = useState([]); // Store filtered results
    const [showSuggestions, setShowSuggestions] = useState(false); // Control dropdown visibility
    const navigate = useNavigate();
    const {books} = useContext(BooksContext);

    // Function to handle input changes and filter books
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value); // Set the query value

        if (value.length > 0) {
            // Filter books based on the title that includes the query (case-insensitive)
            const filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredBooks);
            setShowSuggestions(true); // Show the suggestions dropdown
        } else {
            setSuggestions([]); // Reset suggestions if input is cleared
            setShowSuggestions(false); // Hide suggestions if input is empty
        }
    };

    // Handle selection of a suggestion
    const handleSuggestionClick = (title) => {
        setQuery(title); // Set the input value to the selected book's title
        setSuggestions([]); // Clear the suggestions after selecting one
        setShowSuggestions(false); // Hide suggestions after a selection
    };

    // Redirect to search results
    const redirectToSearch = () => {
        if (query === '') {
            alert('Search field is empty');
        } else {
            navigate('/SearchResulat', { state: query }); // Pass the search query to the search page
        }
    };
    return (
        <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
            <input 
                type="text"
                value={query} // Bind the input to the query state
                onChange={handleInputChange} // Handle typing in the search bar
                className='search-input' 
                placeholder="Search Books" 
                autoComplete="off"
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Hide after losing focus
                onFocus={() => query.length > 0 && setShowSuggestions(true)} // Show if input has value
            />
            <button className="search-button" variant="link" type="button" onClick={redirectToSearch} >
                Search
            </button>

            {/* Dropdown suggestion list */}
            {showSuggestions && suggestions.length > 0 && (
                <ul className="autocomplete-dropdown">
                    {suggestions.map((book) => (
                        <li 
                            key={book.id} 
                            onClick={() => handleSuggestionClick(book.title)} 
                            className="autocomplete-item"
                        >
                            {book.title} - {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchInputForm;
