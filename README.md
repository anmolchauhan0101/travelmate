# 🌍 TravelMate — Full-Stack Travel Planning Platform

> Travelmate is a FULL-Stack MERN Based platform for discovering destinations and organizing trips with authentication, trip management, location-based exploration, and external travel-service integrations.

Live Demo: https://travelmate-plreo4b2z-anmol-chauhans-projects-e9526c2b.vercel.app/

---

## 📌 Overview

**TravelMate** is a full-stack travel planning platform built using the **MERN stack**.

The application allows users to:

- Create an account and securely log in
- Discover destinations around the world
- Search for cities using location-based data
- Explore information about destinations
- Create and manage trips
- Access trip-specific places, restaurants, hotels, and transportation options all at a single platform
- Navigate to external services for real-time travel information

The project focuses on building a **scalable full-stack architecture** while using free and open data sources wherever possible.

---

## 🎯 Problem Statement

Planning a trip often requires switching between multiple platforms for:

- Destination research
- Places to visit
- Restaurants
- Hotels
- Transportation
- Trip organization

TravelMate brings these workflows together into a **single travel-planning interface**, providing users with a structured way to discover destinations and organize their trips.

---

## ✨ Key Features

### 🔐 Authentication & Authorization

- User registration and login
- JWT-based authentication
- Protected API routes
- Persistent authentication state
- Secure user-specific trip access

### 🧳 Trip Management

- Create new trips
- Store trip information in MongoDB
- View trip details
- Access trip-related travel services

### 🌍 Destination Discovery

- Search cities worldwide
- Destination information using publicly available data
- Integration with OpenStreetMap/Nominatim and Wikipedia

### 🗺️ Travel Services

Trip-specific service categories include:

- 📍 Places to Visit
- 🍴 Restaurants
- 🏨 Hotels
- 🚕 Transportation

Restaurants and transportation options use external Google Search links to provide users with current information without depending on expensive paid APIs.

### 🎨 Responsive UI

- Responsive design
- Mobile-friendly interface
- Modern card-based layouts
- Tailwind CSS styling
- React Router based navigation
- Reusable React components

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React.js, React Router, Tailwind CSS, JavaScript (ES6+) |
| **Backend** | Node.js, Express.js, REST APIs, JWT Authentication |
| **Database** | MongoDB, MongoDB Atlas, Mongoose |
| **External Services** | OpenStreetMap / Nominatim, Wikipedia, Google Search |
| **Deployment** | Vercel, Render, MongoDB Atlas |

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │    Tailwind CSS     │
                    └──────────┬──────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express / Node.js │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌──────────────┐
       │ MongoDB    │   │ JWT Auth   │   │ External APIs│
       │   Atlas    │   │            │   │ / Services   │
       └────────────┘   └────────────┘   └──────────────┘
