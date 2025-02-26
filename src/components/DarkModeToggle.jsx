import { useState } from "react";

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    onToggle(!darkMode);
  };

  return (
    <button onClick={toggleMode} style={{ padding: "10px 15px", backgroundColor: darkMode ? "#E94560" : "#16213E", color: "#fff" }}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
