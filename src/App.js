import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import ProductDetails from './Component/ProductDetails';
import BookPages from './Pages/BookPages';
import CartPage from './Pages/CartPage';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import WishList from './Pages/WishlistPage';
import BooksList from './Pages/BooksList';



function App() {
    return (
        <BrowserRouter>

            <div>
            
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="book" element={<BookPages />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/products" element={<BooksList />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />

                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App;
