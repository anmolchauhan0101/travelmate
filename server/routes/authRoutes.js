const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const blacklist = require("../utils/tokenBlacklist");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", authMiddleware, (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  blacklist.add(token);

  res.json({ message: "Logged out successfully" });
});

module.exports = router;
