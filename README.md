🌍 TravelMate — All-in-One Travel Planning Platform

TravelMate is a full-stack MERN travel planning web application that helps users plan trips, explore destinations, and access hotels, restaurants, and transport options — all from a single platform.

The project is designed as a scalable foundation for a future mobile app and advanced travel integrations.

✨ Features
🔐 Authentication

User registration & login
JWT-based authentication
Protected routes for logged-in users

🧳 Trip Management

Create and manage trips
View trip details
Access trip-specific options (places, restaurants, hotels, transport)

🌍 Explore Destinations

Search cities worldwide
Works with both international and Indian locations
Free and open data sources

🍴 Restaurants, 🏨 Hotels & 🚕 Transport

Restaurants & transport redirect to trusted Google search links
Hotels page scaffolded for future integration
Ensures real-time, up-to-date results without paid APIs

🎨 UI & UX

Responsive and clean UI
Built with Tailwind CSS
Mobile-friendly layout

🛠️ Tech Stack
Frontend

React
React Router
Tailwind CSS
Hosted on Vercel

Backend

Node.js
Express.js
JWT Authentication
Hosted on Render

Database

MongoDB Atlas

External APIs & Data Sources

OpenStreetMap (Nominatim) — city search & geolocation
Wikipedia (free access) — destination information
Google Search (external links) — restaurants, hotels, transport

⚠️ Important Note About Data

This project intentionally uses free and open data sources.

Because of this:

Some smaller cities may have limited places-to-visit data
Tourist attractions depend on public data availability
This is expected behavior and not a bug

Paid APIs (Google Places, TripAdvisor, Amadeus) can be integrated in future versions.

🚀 Live Demo

Frontend: https://travelmate-plreo4b2z-anmol-chauhans-projects-e9526c2b.vercel.app

Backend: https://travelmate-iwo2.onrender.com

⚙️ Local Setup Instructions

1️⃣ Clone the repository

git clone https://github.com/anmolchauhan0101/travelmate.git
cd travelmate

2️⃣ Frontend Setup
cd client
npm install
npm start

Frontend runs at: http://localhost:3000

3️⃣ Backend Setup
cd server
npm install
npm run dev

Backend runs at: http://localhost:5000

Create a .env file in server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

📌 Project Status

✅ Core features completed
🚧 Advanced data enrichment planned

🔮 Future Enhancements

Better tourist place ranking
Caching & performance optimization
Mobile app version
Paid API integrations 
Reviews & ratings system

