import React, { useState } from "react";
import { searchCities } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await searchCities(query);
      setCities(res.cities || []);
    } catch {
      setCities([]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Explore Destinations
      </h1>

      <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto mt-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Enter any city in the world"
        />
        <button className="bg-blue-600 text-white px-6 rounded">
          Search
        </button>
      </form>

      <div className="max-w-xl mx-auto mt-6 space-y-3">

        {/* API results */}
        {cities.map((c, i) => (
          <div
            key={i}
            onClick={() => navigate(`/plan-trip?to=${c.name}`)}
            className="bg-white p-4 rounded shadow cursor-pointer"
          >
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500">{c.country}</p>
          </div>
        ))}

        {/* MANUAL FALLBACK */}
        {cities.length === 0 && query && (
          <div
            onClick={() => navigate(`/plan-trip?to=${query}`)}
            className="bg-yellow-50 border border-yellow-400 p-4 rounded cursor-pointer"
          >
            <h3 className="font-semibold">
              Plan trip to “{query}”
            </h3>
            <p className="text-sm text-gray-600">
              (Use custom destination)
            </p>
          </div>
        )}

      </div>
    </div>
  );
}



