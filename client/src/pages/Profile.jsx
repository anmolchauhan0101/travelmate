import React, { useEffect, useState } from "react";
import { getUser, getTrips } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        // 1️⃣ Get logged-in user
        const userData = await getUser();
        setUser(userData);

        // 2️⃣ Get trips
        const tripsData = await getTrips();
        setTrips(tripsData.trips || []);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [navigate]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  if (loading) {
    return (
      <h1 className="text-center text-xl font-semibold mt-20">
        Loading Profile...
      </h1>
    );
  }

  return (
    <div className="min-h-[85vh] bg-gray-100 flex justify-center items-center px-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[420px] text-center">

        {/* Avatar */}
        <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 text-white flex justify-center items-center text-3xl font-bold">
          {user?.name ? user.name.substring(0, 2).toUpperCase() : "U"}
        </div>

        <h2 className="mt-4 text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        {/* Actions */}
        <div className="mt-6 space-y-4">
          <button
            onClick={() => navigate("/plan-trip")}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Plan a Trip
          </button>

          <button
            onClick={() => navigate("/explore")}
            className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-black"
          >
            Explore Places
          </button>

          <button
            onClick={logout}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Trips */}
        <h3 className="text-lg font-semibold mt-6">Your Trips</h3>

        <div className="mt-3 space-y-2">
          {trips.length === 0 && <p>No trips planned yet</p>}

          {trips.map((t) => (
            <div
              key={t._id}
              onClick={() => navigate(`/trip/${t._id}`)}
              className="border p-3 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
            >
              <p>
                <b>{t.from}</b> ➝ <b>{t.to}</b>
              </p>
              <p className="text-sm text-gray-500">
                {t.days} days | {t.travelers} people
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


