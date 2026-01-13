const API_URL = "http://localhost:5000";

/* ================= AUTH ================= */
export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/user/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
};

/* ================= TRIPS ================= */
export const saveTrip = async (trip) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/trip/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(trip)
  });
  return res.json();
};

export const getTrips = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/trip/my-trips`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
};

export const getTripById = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/trip/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
};

/* ================= PLACES ================= */
export const searchCities = async (query) => {
  const res = await fetch(`${API_URL}/api/places/search/${query}`);
  return res.json();
};
export const getPlacesToVisit = async (city) => {
  const res = await fetch(
    `http://localhost:5000/api/places/visit/${city}`
  );
  return res.json();
};




