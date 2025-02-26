import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
      <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
