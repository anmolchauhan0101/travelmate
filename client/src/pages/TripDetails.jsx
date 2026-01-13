import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTripById } from "../utils/api";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrip() {
      try {
        const data = await getTripById(id);
        setTrip(data);
      } catch (err) {
        alert("Failed to load trip");
        navigate("/profile");
      } finally {
        setLoading(false);
      }
    }
    loadTrip();
  }, [id, navigate]);

  if (loading) {
    return <h2 className="text-center mt-20">Loading trip...</h2>;
  }

  if (!trip) {
    return <h2 className="text-center mt-20">Trip not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md text-center">

        <h2 className="text-2xl font-bold text-blue-700">
          {trip.from} → {trip.to}
        </h2>

        <p className="text-gray-600 mt-1">
          {trip.days} days • {trip.travelers} people
        </p>

        <hr className="my-5" />

        <div className="space-y-3">

          <button
            onClick={() => navigate(`/places/${trip.to}`)}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Places to Visit
          </button>

          <button
            onClick={() => navigate(`/restaurants/${trip.to}`)}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Restaurants
          </button>

          <button
            onClick={() => navigate(`/hotels/${trip.to}`)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Hotels
          </button>

          {/* ✅ FIXED TRANSPORT NAVIGATION */}
          <button
            onClick={() =>
              navigate(`/transport?from=${trip.from}&to=${trip.to}`)
            }
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black"
          >
            Transport Options
          </button>

        </div>
      </div>
    </div>
  );
}





