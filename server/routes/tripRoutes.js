const express = require("express");
const router = express.Router();

const {
  createTrip,
  getUserTrips,
  getTripById
} = require("../controllers/tripController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, createTrip);
router.get("/my-trips", authMiddleware, getUserTrips);

// 🔥 NEW ROUTE — Get single trip by ID
router.get("/:id", authMiddleware, getTripById);

module.exports = router;
