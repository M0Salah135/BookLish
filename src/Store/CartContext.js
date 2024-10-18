import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const addToWishlist = (product) => {
        const newWishlist = [...wishlist];
          newWishlist.push(product);
        localStorage.setItem("uwishlist", JSON.stringify(newWishlist));
        setWishlist(newWishlist);
      };
      const removeFromWishlist = (product) => {
        const newWishlist = wishlist.filter((_product) => _product.title !== product.title);
        localStorage.setItem("uwishlist", JSON.stringify(newWishlist));
        setWishlist(newWishlist);
      }
    
    
      const removeFromCart = (product) => {
        const newCart = cart.filter((_product) => _product.title !== product.title);
        localStorage.setItem("ucart", JSON.stringify(newCart));
        setCart(newCart);
      };
    
      const addToCart = (product) => {
        const idx = cart.findIndex((_product) => _product.title === product.title);
        const newCart = [...cart];
        if (idx > -1) {
          newCart[idx].quantity++;
        } else {
          const u_product = { ...product, quantity: 1 };
          newCart.push(u_product);
        }
        localStorage.setItem("ucart", JSON.stringify(newCart));
        setCart(newCart);
      };
    
    
      useEffect(() => {
        // initial render -> get the first data from localstorage
        const cartLocalState = localStorage.getItem("ucart");
        if (cartLocalState) {
          const cart = JSON.parse(cartLocalState);
          setCart(cart);
        } else {
          localStorage.setItem("ucart", JSON.stringify([]));
        }
        // ---------------------
      }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;