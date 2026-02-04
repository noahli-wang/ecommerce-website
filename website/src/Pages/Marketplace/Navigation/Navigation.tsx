import "./navigation.css";
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Marketplace</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
}
