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

  const shareLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const openLink = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url; // Ensure URLs work properly
    }
    window.open(url, "_blank");
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
            onClick={() => openLink(link.url)}
          >
            {/* Card Content */}
            <div className="card-content">
              <p className="description-text">{link.description}</p>
              <p className="link-text">{link.url}</p>
            </div>

            {/* Buttons */}
            <div className="button-container">
              <button className="edit-btn" onClick={(e) => { e.stopPropagation(); editLink(index); }}>
                Edit
              </button>
              <button className="delete-btn" onClick={(e) => { e.stopPropagation(); removeLink(index); }}>
                Delete
              </button>
              <button className="share-btn" onClick={(e) => { e.stopPropagation(); shareLink(link.url); }}>
                Share
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
