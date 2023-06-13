const express = require("express");
const { urlencoded, static, json } = require("express");
const { join } = require("path");

// Set up Express
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// Serve up static assets
app.use(static(join(__dirname, "..", "client", "dist")));

// Singular API route
app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "..", "client", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT} with database connected`);
});
