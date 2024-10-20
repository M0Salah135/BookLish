import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from './Component/BookDetails';
import './index.css';
import CartList from './Pages/CartList';
import Home from './Pages/Home';
import HomeSub from './Pages/HomeSub';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import WishList from './Pages/WishlistPage';
import BooksProvider from './Store/BooksContext';
import CartProvider from './Store/CartContext';
import Cart from './Component/Cart';
import CustmerNavbar from './Component/CustmerNavbar';




function App() {
    return (
        <BrowserRouter>
        <BooksProvider>
        <CartProvider> 
            <div>
            <CustmerNavbar />  {/* إضافة Navbar هنا لجعله مرئيًا دائمًا */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/book/:id" element={<BookDetails />} />
                    <Route path="/products" element={<HomeSub />} />
                    <Route path="/cart" element={<Cart />} />  {/* استخدام Cart هنا */}
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Toaster />
            </div>
        </CartProvider>
        </BooksProvider>
        </BrowserRouter>
    )
}
export default App;
