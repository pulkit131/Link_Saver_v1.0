import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div style={{ background: darkMode ? "#222" : "#f4f4f4", color: darkMode ? "#fff" : "#333", height: "100vh" }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
