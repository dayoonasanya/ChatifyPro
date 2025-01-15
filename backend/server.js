const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error(`MongoDB Connection Error: ${err.message}`);
    process.exit(1); // Exit the process if the connection fails
  });

// Import Routes
const authRoutes = require("./routes/auth");
const chatbotRoutes = require("./routes/chatbot"); // Adjusted to match your file name

// Use Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/chatbots", chatbotRoutes); // Chatbot routes

// Serve static files from the React app (frontend build folder)
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Catch-all route to handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

