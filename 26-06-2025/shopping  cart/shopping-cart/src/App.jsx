import React, { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const productList = [
  { id: 1, name: "Gaming Mouse", price: 49 },
  { id: 2, name: "Mechanical Keyboard", price: 99 },
  { id: 3, name: "RGB Headphones", price: 89 },
  { id: 4, name: "1080p Webcam", price: 79 },
  { id: 5, name: "Gaming Chair", price: 199 },
];

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    setCart([...cart, item]);
  }

  function handleRemoveFromCart(indexToRemove) {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  }

  return (
    <div className="app">
      <h1 className="title">🛒 Pro Gamer Store</h1>
      <div className="content">
        <div className="products">
          {productList.map((item) => (
            <ProductCard key={item.id} item={item} onAdd={handleAddToCart} />
          ))}
        </div>
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
}


export default App;
