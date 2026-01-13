import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await loginUser(email, password);

      if (res.token) {
        localStorage.setItem("token", res.token);
        alert("Login Successful");
        navigate("/profile");
      } else {
        alert(res.message || "Login failed");
      }

    } catch (error) {
      alert("Login failed");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[380px]">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}


