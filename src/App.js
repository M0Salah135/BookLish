import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from './Component/BookDetails';
import CustmerFooter from './Component/Footer';
import './index.css';
import CartList from './Pages/CartList';
import Home from './Pages/Home';
import HomeSub from './Pages/HomeSub';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import WishList from './Pages/WishlistPage';
import { AuthProvider } from './Store/AuthContext';
import BooksProvider from './Store/BooksContext';
import CartProvider from './Store/CartContext';
import SearchResulat from './Component/SearchResulat';




function App() {
    return (
        <BrowserRouter>
        <BooksProvider>
        <CartProvider>
        <AuthProvider> 
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/book/:id" element={<BookDetails />} />
                    <Route path="/products" element={<HomeSub />} />
                    <Route path="/cart" element={<CartList />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/SearchResulat" element={<SearchResulat />} />
                </Routes>
                <Toaster />
                <CustmerFooter />
            </div>
        </AuthProvider>
        </CartProvider>
        </BooksProvider>
        </BrowserRouter>
    )
}
export default App;
