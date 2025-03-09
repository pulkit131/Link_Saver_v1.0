import express from "express";
import Link from "../models/Link.js";

const router = express.Router();

// Add a new link
router.post("/", async (req, res) => {
  try {
    const { url, title } = req.body;

    // Validate input
    if (!url || !title) {
      return res.status(400).json({ error: "URL and Title are required" });
    }

    const newLink = new Link({ url, title });
    await newLink.save();
    res.status(201).json({ message: "Link saved successfully", link: newLink });
  } catch (error) {
    console.error("Error saving link:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all saved links
router.get("/", async (req, res) => {
  try {
    const links = await Link.find();
    res.status(200).json(links);
  } catch (error) {
    console.error("Error fetching links:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Delete a link by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedLink = await Link.findByIdAndDelete(req.params.id);

    if (!deletedLink) {
      return res.status(404).json({ error: "Link not found" });
    }

    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error("Error deleting link:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
