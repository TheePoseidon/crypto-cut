const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Route for testing the server
app.get("/", (req, res) => {
  res.send("Crypto Tracker is Running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
