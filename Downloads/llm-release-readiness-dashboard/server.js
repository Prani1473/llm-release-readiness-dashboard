import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix for __dirname in ES modules
const __dirname = new URL('.', import.meta.url).pathname;

// Serve static files from dist
app.use(express.static(path.join(__dirname, "dist")));

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});