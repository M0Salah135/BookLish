import { createContext, useState } from "react";
import data from "../Data/data.json";

export const BooksContext = createContext();
/**
 * The BooksProvider component provides the books context to its children components.
 * The context contains the list of books and the updateBooks function to update the list of books.
 * @param {{children: React.ReactNode}} props the children components to be wrapped by the context provider
 * @returns {React.ReactNode} the BooksProvider component
 */
const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(data.books);
    /**
     * The updateBooks function updates the list of books in the context.
     * @param {Object[]} newBooks the new list of books
     */
    const updateBooks = (newBooks) => setBooks(newBooks);

    return (
        <BooksContext.Provider value={{ books, updateBooks }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;


