import { useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addLink = () => {
    if (newLink && newDescription) {
      if (editIndex !== null) {
        const updatedLinks = links.map((link, index) => (
          index === editIndex ? { url: newLink, description: newDescription } : link
        ));
        setLinks(updatedLinks);
        setEditIndex(null);
      } else {
        setLinks([...links, { url: newLink, description: newDescription }]);
      }
      setNewLink("");
      setNewDescription("");
    }
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const editLink = (index) => {
    setNewLink(links[index].url);
    setNewDescription(links[index].description);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input placeholder="Enter Link" value={newLink} onChange={(e) => setNewLink(e.target.value)} />
        <input placeholder="Enter Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        <button onClick={addLink}>{editIndex !== null ? "Update" : "Save"}</button>
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {links.map((link, index) => (
          <motion.div key={index} style={{ 
            background: "white", 
            padding: "1rem", 
            borderRadius: "8px", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
            transition: "transform 0.3s", 
            position: "relative", 
            width: "250px", 
            minHeight: "120px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between"
          }} whileHover={{ scale: 1.05 }}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ wordWrap: "break-word" }}>{link.url}</a>
            <p style={{ fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button style={{ background: "#f4a261", border: "none", color: "white", padding: "5px", cursor: "pointer", flex: "1", marginRight: "5px" }} onClick={() => editLink(index)}>Edit</button>
              <button style={{ background: "#e76f51", border: "none", color: "white", padding: "5px", cursor: "pointer", flex: "1" }} onClick={() => removeLink(index)}>Remove</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;