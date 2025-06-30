import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name} - ${item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(index))}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <p className="total">Total: ${total}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
