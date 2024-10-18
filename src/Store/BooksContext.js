import { createContext, useState } from "react";
import data from "../Data/data.json";

export const BooksContext = createContext();
const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(data.books);
    const updateBooks = (newBooks) => setBooks(newBooks);

    return (
        <BooksContext.Provider value={{ books, updateBooks }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
