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
  return (
    <div className="app">
      <h1 className="title">Gamer Store</h1>
      <div className="content">
        <div className="products">
          {productList.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
