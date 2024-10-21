import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

/**
 * This component provides the context for the cart and wishlist
 * The cart contains the products that the user has added to the cart
 * The wishlist contains the products that the user has added to the wishlist
 * The functions to manipulate the cart and wishlist are also provided
 * The functions are
 * addToCart: adds a product to the cart
 * removeFromCart: removes a product from the cart
 * addToWishlist: adds a product to the wishlist
 * removeFromWishlist: removes a product from the wishlist
 * decreasCount: decreases the quantity of a product in the cart
 */
const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {
    if (!user) {
      toast.error("Please Login!");
      navigate("/login");
      return;
    }
    const newWishlist = [...wishlist];
    newWishlist.push(product);
    localStorage.setItem("uwishlist", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  const removeFromWishlist = (product) => {
    const newWishlist = wishlist.filter(
      (_product) => _product.title !== product.title
    );
    localStorage.setItem("uwishlist", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((_product) => _product.title !== product.title);
    localStorage.setItem("ucart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = (product) => {
    if (!user) {
      toast.error("Please Login!");
      navigate("/login");
      return;
    }

    const idx = cart.findIndex((_product) => _product.title === product.title);
    const newCart = [...cart];
    if (idx > -1) {
      newCart[idx].quantity++;
    } else {
      const u_product = { ...product, quantity: 1 };
      newCart.push(u_product);
    }

    // Show a success message
    toast.success("Product Added!");

    localStorage.setItem("ucart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const decreasCount = (product) => {
    const idx = cart.findIndex((_product) => _product.title === product.title);
    const newCart = [...cart];
    if (idx > -1 && newCart[idx].quantity > 1) {
      newCart[idx].quantity--;
    } else if (idx > -1 && newCart[idx].quantity === 1) {
      newCart.splice(idx, 1);
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

    const wishlistLocalState = localStorage.getItem("uwishlist");
    if (wishlistLocalState) {
      const wishlist = JSON.parse(wishlistLocalState);
      setWishlist(wishlist);
    } else {
      localStorage.setItem("uwishlist", JSON.stringify([]));
    }
    // ---------------------
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        decreasCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
