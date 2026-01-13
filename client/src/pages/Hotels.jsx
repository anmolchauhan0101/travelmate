import React from "react";
import { useParams } from "react-router-dom";

export default function Hotels() {
  const { destination } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800">
        Hotels & Stay in {destination}
      </h1>

      <div className="mt-10 max-w-xl mx-auto space-y-4">

        {/* Booking */}
        <a
          href="https://www.booking.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow p-4 rounded-lg hover:bg-gray-50"
        >
          🏨 Book Hotels on Booking.com
        </a>

        {/* MakeMyTrip */}
        <a
          href="https://www.makemytrip.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow p-4 rounded-lg hover:bg-gray-50"
        >
          🏠 Find Stays on MakeMyTrip
        </a>

        {/* OYO */}
        <a
          href="https://www.oyorooms.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow p-4 rounded-lg hover:bg-gray-50"
        >
          🛏️ Budget Hotels on OYO
        </a>

        {/* Airbnb */}
        <a
          href="https://www.airbnb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow p-4 rounded-lg hover:bg-gray-50"
        >
          🏡 Homestays on Airbnb
        </a>

      </div>
    </div>
  );
}
