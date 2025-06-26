import React from "react";
import "./ProductCard.css";

function ProductCard({ item, onAdd }) {
  return (
    <div className="product-card">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => onAdd(item)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
