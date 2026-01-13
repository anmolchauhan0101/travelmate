import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-300";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        TravelMate
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-lg">

        <Link to="/" className={linkClass("/")}>
          Home
        </Link>

        <Link to="/explore" className={linkClass("/explore")}>
          Explore
        </Link>

        {!token && (
          <>
            <Link to="/login" className={linkClass("/login")}>
              Login
            </Link>
            <Link to="/register" className={linkClass("/register")}>
              Register
            </Link>
          </>
        )}

        {token && (
          <>
            <Link to="/profile" className={linkClass("/profile")}>
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}



