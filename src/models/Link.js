import { useEffect, useState } from "react";

function Link() {
  const [links, setLinks] = useState([]); // Store saved links
  const [url, setUrl] = useState("");

  // Load saved links when the component mounts
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/links");
        const data = await res.json();
        setLinks(data); // Set retrieved links in state
      } catch (err) {
        console.error("Error fetching links:", err);
      }
    };
    fetchLinks();
  }, []);

  // Add a new link
  const addLink = async () => {
    if (!url) return alert("Enter a valid link!");

    try {
      const res = await fetch("http://localhost:5000/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (res.ok) {
        const savedLink = await res.json();
        setLinks((prev) => [...prev, savedLink]); // Update state with new link
        setUrl("");
      } else {
        console.error("Failed to save link");
      }
    } catch (err) {
      console.error("Error adding link:", err);
    }
  };

  return (
    <div>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter a link" />
      <button onClick={addLink}>Save</button>
      
      <h2>Saved Links</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>{link.url}</li>
        ))}
      </ul>
    </div>
  );
}

export default Link;
