import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          CareerOS
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/modules">Modules</Link></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Start Free
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;