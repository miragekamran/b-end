const express = require("express");
const dotenv = require("dotenv");
const moviesRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes")

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Movie List App");
});
app.use("/movies", moviesRoutes);
app.use("/users", userRoutes);

// Start the server locally
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
