const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  try {
    const userId = req.user.id;
    const { from, to, days, travelers } = req.body;

    if (!from || !to) {
      return res.status(400).json({ message: "From & To required" });
    }

    const trip = await Trip.create({
      user: userId,
      from,
      to,
      days,
      travelers
    });

    res.json({
      message: "Trip Saved Successfully",
      trip
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getUserTrips = async (req, res) => {
  try {
    const trips = await Trip
      .find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({ trips });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔥 NEW — Get single trip by ID
exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.json(trip);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

