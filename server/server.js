const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env
dotenv.config();

const app = express();

// Connect Database FIRST
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/test", require("./routes/testProtected"));
app.use("/api/trip", require("./routes/tripRoutes"));
app.use("/api/places", require("./routes/placeRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("TravelMate Backend Running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
