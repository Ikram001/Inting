import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ textAlign: "center", marginBottom: "1.5rem" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#4f46e5", fontWeight: 600 }}>
        Todo List
      </Link>
      <Link to="/fetch" style={{ color: "#4f46e5", fontWeight: 600 }}>
        API Demo
      </Link>
    </nav>
  );
}

export default Navbar;
