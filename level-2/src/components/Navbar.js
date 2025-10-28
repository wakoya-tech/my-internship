import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#0077b6", color: "#fff" }}>
      <Link to="/" style={{ margin: "1rem", color: "#fff" }}>Home</Link>
      <Link to="/about" style={{ margin: "1rem", color: "#fff" }}>About</Link>
      <Link to="/contact" style={{ margin: "1rem", color: "#fff" }}>Contact</Link>
    </nav>
  );
}
