import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700">
          TravelMate
        </h1>

        <p className="text-gray-600 text-lg mt-4">
          Your all-in-one travel companion.  
          Plan trips, book transport, find hotels, food, and explore destinations —
          all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() =>
              token ? navigate("/profile") : navigate("/register")
            }
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {token ? "Go to Dashboard" : "Get Started"}
          </button>

          <button
            onClick={() => navigate("/explore")}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Explore Destinations
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-16">

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            🚕 Transport
          </h3>
          <p className="text-gray-600">
            Cabs, buses, trains & flights — redirected instantly to trusted platforms.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            🏨 Hotels & Stay
          </h3>
          <p className="text-gray-600">
            Compare hotels, homestays & budget stays in one place.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            🍕 Food & Places
          </h3>
          <p className="text-gray-600">
            Discover restaurants, cafes & must-visit attractions.
          </p>
        </div>

      </div>
    </div>
  );
}

