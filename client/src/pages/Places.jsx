import React from "react";
import { useParams } from "react-router-dom";

export default function Places() {
  const { city } = useParams();
  const encodedCity = encodeURIComponent(city);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-xl w-full">

        <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">
          Places to Visit in {city}
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Discover popular attractions, landmarks, and sightseeing spots.
        </p>

        {/* Primary Links */}
        <div className="space-y-4">

          <a
            href={`https://www.google.com/maps/search/things+to+do+in+${encodedCity}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full bg-purple-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-purple-700"
          >
            View Attractions on Google Maps
          </a>

          <a
            href={`https://en.wikipedia.org/wiki/${encodedCity}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700"
          >
            Read About {city} on Wikipedia
          </a>

          <a
            href={`https://www.tripadvisor.in/Search?q=${encodedCity}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full bg-green-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-700"
          >
            Explore on TripAdvisor
          </a>

        </div>

        {/* UX Explanation */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          We provide trusted external sources to ensure you always get
          accurate and up-to-date information for any destination worldwide.
        </p>

      </div>
    </div>
  );
}






