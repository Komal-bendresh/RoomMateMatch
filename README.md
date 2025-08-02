# 🏠 AI-Powered Roommate Matching for Women's Co-Living Spaces

## 📌 Overview
This project is a **MERN stack** application that uses AI to match women in co-living spaces based on lifestyle preferences, compatibility scores, and availability.  
It provides:
- **User authentication & verification**
- **Preference surveys**
- **AI-powered roommate matching**
- **Room allocation (Twin/Single)**
- **Real-time chat between matched users**

---

## 🚀 Features
- **User Registration & Login**  
  Register with name, phone, email, DOB, and password.

- **User Verification Process**  
  Submit details like education, employment, building info, dating status, etc.

- **Lifestyle Preferences Collection**  
  Includes sleep schedule, cleanliness, guest policy, stress management, etc.

- **AI Roommate Matching**  
  Uses Groq API / GPT-based matching or cosine similarity for fallback.

- **Room Allocation**  
  Twin-sharing if match available, otherwise single room.

- **Chat System**  
  Matched users can communicate directly.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI:** Groq API (or cosine similarity)
- **Authentication:** JWT
- **Real-time Chat:** Socket.IO

---

## 📂 Project Structure
client/ # React frontend
src/
pages/
components/
context/
App.jsx
server/ # Express backend
controllers/
models/
routes/
config/
server.js
README.md




## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Komal-bendresh/RoomMateMatch.git
cd roommate-matching

2️⃣ Backend Setup

cd server
npm install


 create .env

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key


npm start

cd ../client
npm install


🔄 API Endpoints
Authentication
POST /api/auth/register → Register user

POST /api/auth/login → Login user

User Preferences
POST /api/preferences → Save preferences (Omnidim webhook updates)

PUT /api/preferences/:id → Update preferences

AI Matching
POST /api/match → Get best match + store in DB

Room Allocation
POST /api/assign-room → Assign room to matched users

🧠 AI Matching Flow
User completes preference survey.

Backend sends data to AI model (Groq API / GPT).

AI returns:

Best match user

Compatibility score

Reason for match

Backend saves result and assigns room.

💬 Chat Feature
Implemented using Socket.IO

Matched users get a private chat room

Messages stored in MongoDB

📜 License
MIT License © 2025


