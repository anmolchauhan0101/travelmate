import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { saveTrip } from "../utils/api";
import { useLocation } from "react-router-dom";

export default function TripPlanner() {
  const location = useLocation();

  const [params] = useSearchParams();

const [trip, setTrip] = useState({
  from: "",
  to: params.get("to") || "",
  days: "",
  travelers: ""
});


  // 🔥 AUTO-FILL DESTINATION FROM EXPLORE
  useEffect(() => {
    if (location.state?.destination) {
      setTrip((prev) => ({
        ...prev,
        to: location.state.destination
      }));
    }
  }, [location.state]);

  function handleChange(e) {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!trip.from || !trip.to) {
      alert("From and To fields are required");
      return;
    }

    const res = await saveTrip(trip);

    if (res.message === "Trip Saved Successfully") {
      alert("Trip Saved Successfully 🎉");
      setTrip({
        from: "",
        to: "",
        days: "",
        travelers: ""
      });
    } else {
      alert("Failed to save trip");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[450px]">

        <h2 className="text-3xl font-bold text-blue-700 text-center mb-5">
          Plan Your Trip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="from"
            placeholder="From City"
            value={trip.from}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="to"
            placeholder="Destination City"
            value={trip.to}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="days"
            placeholder="Number of Days"
            value={trip.days}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="travelers"
            placeholder="Number of Travelers"
            value={trip.travelers}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Save Trip
          </button>

        </form>
      </div>
    </div>
  );
}


