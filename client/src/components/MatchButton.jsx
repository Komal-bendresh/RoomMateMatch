// // MatchButton.jsx
// import React, { useState } from "react";
// import API from "../../api"; // axios instance
// import { useAuth } from "../../AuthContext";

// const MatchButton = () => {
//   const { user } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [matchResult, setMatchResult] = useState(null);
//   const [error, setError] = useState("");

//   const handleMatch = async () => {
//     if (!user?._id) return;

//     setLoading(true);
//     setError("");

//     try {
//       const response = await API.post("/match", { userId: user._id });
//       setMatchResult(response.data.match);
//     } catch (err) {
//       setError("❌ Matching failed. Try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       <button
//         onClick={handleMatch}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         {loading ? "Matching..." : "Find My Roommate"}
//       </button>

//       {matchResult && (
//         <div className="mt-4 text-left">
//           <h3 className="text-lg font-bold">🎯 Match Found:</h3>
//           <p>👤 Match Name: {matchResult.matchName}</p>
//           <p>📊 Compatibility Score: {matchResult.score}</p>
//           <p>💡 Reason: {matchResult.reason}</p>
//           <p>🏠 Assigned Room: {matchResult.assignedRoom || "None"}</p>
//         </div>
//       )}

//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default MatchButton;

import axios from "axios";
import { useAuth } from "../../AuthContext"; // adjust path if needed
import { useState } from "react";

const MatchButton = () => {
  const { user } = useAuth();
  const [matchResult, setMatchResult] = useState(null);
  const [error, setError] = useState("");

 const handleFindMatch = async () => {
  try {
    console.log("Sending userId to backend:", user?._id);
    const res = await axios.post("http://localhost:5000/api/v2/match", {
      userId: user.id,
    });

    console.log("✅ Match response:", res.data);
  } catch (err) {
    console.error("❌ Match error:", err.response?.data || err.message);
  }
};

  return (
    <div>
      <button onClick={handleFindMatch} className="btn btn-primary">
        Find My Roommate
      </button>

      {matchResult && (
        <div>
          <h3>🎉 Match Found!</h3>
          <p>Match: {matchResult.matchName}</p>
          <p>Score: {matchResult.score}</p>
          <p>Reason: {matchResult.reason}</p>
          <p>Assigned Room: {matchResult.assignedRoom}</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default MatchButton;

