import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addLink = () => {
    if (!newLink.trim() || !newDescription.trim()) return;

    if (editIndex !== null) {
      const updatedLinks = [...links];
      updatedLinks[editIndex] = { url: newLink, description: newDescription };
      setLinks(updatedLinks);
      setEditIndex(null);
    } else {
      setLinks([...links, { url: newLink, description: newDescription }]);
    }

    setNewLink("");
    setNewDescription("");
  };

  const editLink = (index) => {
    setNewLink(links[index].url);
    setNewDescription(links[index].description);
    setEditIndex(index);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard-container">
      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Link"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="input-field"
        />
        <button className="action-button" onClick={addLink}>
          {editIndex !== null ? "Update" : "Save"}
        </button>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        {links.map((link, index) => (
          <motion.div
            key={index}
            className="link-card"
            whileHover={{ transform: "translateY(-5px)", boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)" }}
          >
            <p className="description-text">{link.description}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-text">
              {link.url}
            </a>

            {/* Button Container */}
            <div className="button-container">
              <button className="edit-btn" onClick={() => editLink(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => removeLink(index)}>
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
