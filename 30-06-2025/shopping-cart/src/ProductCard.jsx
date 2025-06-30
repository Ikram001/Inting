import React from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => dispatch(addToCart(item))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
