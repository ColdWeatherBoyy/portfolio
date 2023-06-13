const express = require("express");
const { urlencoded, static, json } = require("express");
const { join } = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "..", "client", "dist", "index.html"));
});

app.use(static(join(__dirname, "..", "client", "dist")));

app.use(require("./routes"));

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT} with database connected`);
});
