import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Transport() {
  const [searchParams] = useSearchParams();
  const to = searchParams.get("to");

  if (!to) {
    return (
      <h2 className="text-center mt-20 text-gray-600">
        Destination not provided
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-md w-full text-center">

        <h2 className="text-2xl font-bold text-blue-700 mb-3">
          Transport Options to {to}
        </h2>

        <div className="space-y-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${to}`}
            target="_blank"
            rel="noreferrer"
            className="block bg-blue-600 text-white py-2 rounded-lg"
          >
            View Routes on Google Maps
          </a>

          <a
            href={`https://www.irctc.co.in/nget/train-search`}
            target="_blank"
            rel="noreferrer"
            className="block bg-green-600 text-white py-2 rounded-lg"
          >
            Search Trains
          </a>

          <a
            href={`https://www.google.com/flights`}
            target="_blank"
            rel="noreferrer"
            className="block bg-purple-600 text-white py-2 rounded-lg"
          >
            Search Flights
          </a>
        </div>

      </div>
    </div>
  );
}



