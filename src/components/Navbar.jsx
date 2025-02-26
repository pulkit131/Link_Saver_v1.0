import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ color: "white", margin: "0 1rem", textDecoration: "none" }}>Contact</Link>
      <button style={{ background: "#e94560", padding: "10px", border: "none", color: "white", cursor: "pointer" }} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;