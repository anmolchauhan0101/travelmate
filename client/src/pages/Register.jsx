import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await registerUser(form);

      if (res.success) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(res.message || "Registration failed");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[400px]">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
