import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import TripPlanner from "./pages/TripPlanner";
import TripDetails from "./pages/TripDetails";
import Places from "./pages/Places";
import Restaurants from "./pages/Restaurants";
import Hotels from "./pages/Hotels";
import Transport from "./pages/Transport";

import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/plan-trip"
          element={
            <ProtectedRoute>
              <TripPlanner />
            </ProtectedRoute>
          }
        />

        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trip/:id"
          element={
            <ProtectedRoute>
              <TripDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/places/:city"
          element={
            <ProtectedRoute>
              <Places />
            </ProtectedRoute>
          }
        />

        <Route
          path="/restaurants/:city"
          element={
            <ProtectedRoute>
              <Restaurants />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotels/:city"
          element={
            <ProtectedRoute>
              <Hotels />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transport"
          element={
            <ProtectedRoute>
              <Transport />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}




