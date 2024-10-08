
import { createContext, useEffect, useState } from "react";
import data from "../Data/data.json";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(data.books);
  const [users, setUsers] = useState(data.users);

  const updateBooks = (newBooks) => {
    setBooks(newBooks);
  };

//   useEffect(() => {
//     axios.get("http://localhost:8000/books").then((response) => {
//       const backendData = response.data;
//       const frontendData = backendData.map((item) => {
//         return {
//           ...item,
//           title: item.title,
//           author: item.author,
//           category: item.category,
//           price: item.price,
//           stock: item.stock,
//           imageUrl: item.imageUrl,
//           id: item._id,
//           desc: item.description,

//         };
//       });
//       setBooks(frontendData);
//     });
//   }, []);



  return (
    <BooksContext.Provider value={{ books, updateBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
  // fetch ()
  // get data -> set Products
  // localhost:5000/api/products

  // change shape of data -> in one place

  // return products

export default BooksProvider;
