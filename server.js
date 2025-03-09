require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define Link Schema & Model
const LinkSchema = new mongoose.Schema({ url: { type: String, required: true } });
const LinkModel = mongoose.model("Link", LinkSchema);

// Get all saved links
app.get("/api/links", async (req, res) => {
  try {
    const links = await LinkModel.find();
    res.status(200).json(links);
  } catch (err) {
    res.status(500).json({ error: "Server error while fetching links" });
  }
});

// Save a new link
app.post("/api/links", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const newLink = new LinkModel({ url });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (err) {
    res.status(500).json({ error: "Error saving link" });
  }
});

// Delete a link by ID
app.delete("/api/links/:id", async (req, res) => {
  try {
    const deletedLink = await LinkModel.findByIdAndDelete(req.params.id);
    if (!deletedLink) return res.status(404).json({ error: "Link not found" });

    res.status(200).json({ message: "Link deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting link" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
