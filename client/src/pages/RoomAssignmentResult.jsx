import React, { useEffect, useState } from "react";
import axios from "axios";

const RoomAssignmentResult = () => {
  const [userData, setUserData] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v2/users/${user._id}`, {
          withCredentials: true,
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Failed to load room/match info", err);
      }
    };

    if (user && user._id) fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="p-4 rounded shadow max-w-xl mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-4">🛏️ Your Room Assignment</h2>

      {userData.assignedRoom ? (
        <div className="mb-6">
          <p><strong>Room Number:</strong> {userData.assignedRoom.roomNumber}</p>
          <p><strong>Room Type:</strong> {userData.assignedRoom.type}</p>
        </div>
      ) : (
        <p>❌ No room assigned yet.</p>
      )}

      <h3 className="text-xl font-semibold mb-2">👭 Your Best Match</h3>
      {userData.match ? (
        <div>
          <p><strong>Name:</strong> {userData.match.name}</p>
          <p><strong>Compatibility Score:</strong> {userData.match.score}</p>
          <p><strong>Reason:</strong> {userData.match.reason}</p>
        </div>
      ) : (
        <p>❌ No match found yet.</p>
      )}
    </div>
  );
};

export default RoomAssignmentResult;
