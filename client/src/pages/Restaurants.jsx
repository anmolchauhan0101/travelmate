import { useParams } from "react-router-dom";

export default function Restaurants() {
  const { city } = useParams();

  if (!city) {
    return (
      <p className="text-center mt-20">
        Invalid destination
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-md w-full text-center">

        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Restaurants & Cafes in {city}
        </h1>

        <p className="text-gray-600 mb-6">
          Discover top-rated food places using Google Maps.
        </p>

        <a
          href={`https://www.google.com/maps/search/restaurants+in+${encodeURIComponent(city)}`}
          target="_blank"
          rel="noreferrer"
          className="block bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
        >
          View Restaurants on Google Maps
        </a>

      </div>
    </div>
  );
}

