// import logo from './logo.svg';
import './App.css';
import NavBar from './Commponant/NavBar';
import SearchBar from './Commponant/SearchBar';
import Slider from './Commponant/Slider';
import Footer from './Commponant/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetail from './Commponant/ProductDetails';
import ProductList from './Pages/ProductList';
import CartPage from './Pages/CartPage';
import WishList from './Pages/WishlistPage';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';








function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
