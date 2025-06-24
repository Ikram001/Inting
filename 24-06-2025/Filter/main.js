const products = [
  { name: "iPhone 13", category: "Electronics" },
  { name: "T-Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Sneakers", category: "Footwear" },
  { name: "AirPods", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
];

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

function renderProducts(list) {
  productList.innerHTML = "";
  if (list.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }
  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `${product.name}<br>${product.category}`;
    productList.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

renderProducts(products);
