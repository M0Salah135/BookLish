import React, { useContext } from 'react';
import { CartContext } from '../Store/CartContext'; // استيراد سياق السلة
import './Cart.css'; // استيراد ملف CSS

const Cart = () => {
  // استخدام CartContext للحصول على بيانات السلة
  const { cart, removeFromCart, setCart } = useContext(CartContext);

  // Function to update the quantity of an item
  const updateQuantity = (item, newQuantity) => {
    // التحقق من الكمية الجديدة
    if (newQuantity < 1) return; // لا نقوم بتحديث الكمية إذا كانت أقل من 1

    // تحديث السلة بناءً على الكمية الجديدة
    const updatedCart = cart.map((cartItem) =>
      cartItem.title === item.title ? { ...cartItem, quantity: newQuantity } : cartItem
    );

    // تحديث الحالة الخاصة بالسلة
    setCart(updatedCart); // تأكد من تحديث حالة cart
    localStorage.setItem("ucart", JSON.stringify(updatedCart)); // تحديث localStorage
  };

  // زيادة الكمية
  const increaseQuantity = (item) => {
    // زيادة الكمية مهما كانت
    updateQuantity(item, item.quantity + 1);
  };

  // إنقاص الكمية
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item, item.quantity - 1);
    } else {
      // إذا كانت الكمية 1 وتم الضغط على زر "-"، نقوم بإزالة العنصر
      removeFromCart(item);
    }
  };

  // حساب السعر الإجمالي
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.title} className="cart-item">
              <span className="cart-item-name">{item.title}</span>
              <span className="cart-item-price">
                ${item.price} x 
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="cart-item-quantity"
                />
                <button onClick={() => increaseQuantity(item)}>+</button>
              </span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">Total: ${getTotalPrice()}</h3>
    </div>
  );
};

export default Cart;
