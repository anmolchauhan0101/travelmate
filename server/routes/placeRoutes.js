const express = require("express");
const router = express.Router();

const {
  searchPlaces,
  getPlacesToVisit,
} = require("../controllers/placeController");

router.get("/search/:query", searchPlaces);
router.get("/visit/:city", getPlacesToVisit);

module.exports = router;
