// // // MatchButton.jsx
// // import React, { useState } from "react";
// // import API from "../../api"; // axios instance
// // import { useAuth } from "../../AuthContext";

// // const MatchButton = () => {
// //   const { user } = useAuth();
// //   const [loading, setLoading] = useState(false);
// //   const [matchResult, setMatchResult] = useState(null);
// //   const [error, setError] = useState("");

// //   const handleMatch = async () => {
// //     if (!user?._id) return;

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await API.post("/match", { userId: user._id });
// //       setMatchResult(response.data.match);
// //     } catch (err) {
// //       setError("❌ Matching failed. Try again.");
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="p-4 border rounded-lg shadow-md">
// //       <button
// //         onClick={handleMatch}
// //         disabled={loading}
// //         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //       >
// //         {loading ? "Matching..." : "Find My Roommate"}
// //       </button>

// //       {matchResult && (
// //         <div className="mt-4 text-left">
// //           <h3 className="text-lg font-bold">🎯 Match Found:</h3>
// //           <p>👤 Match Name: {matchResult.matchName}</p>
// //           <p>📊 Compatibility Score: {matchResult.score}</p>
// //           <p>💡 Reason: {matchResult.reason}</p>
// //           <p>🏠 Assigned Room: {matchResult.assignedRoom || "None"}</p>
// //         </div>
// //       )}

// //       {error && <p className="text-red-500 mt-2">{error}</p>}
// //     </div>
// //   );
// // };

// // export default MatchButton;

// // import axios from "axios";
// // import { useAuth } from "../../AuthContext"; // adjust path if needed
// // import { useState } from "react";

// // const MatchButton = () => {
// //   const { user } = useAuth();
// //   const [matchResult, setMatchResult] = useState(null);
// //   const [error, setError] = useState("");

// //  const handleFindMatch = async () => {
// //   try {
// //     console.log("Sending userId to backend:", user?._id);
// //     const res = await axios.post("http://localhost:5000/api/v2/match", {
// //       userId: user.id,
// //     });

// //     console.log("✅ Match response:", res.data);
// //   } catch (err) {
// //     console.error("❌ Match error:", err.response?.data || err.message);
// //   }
// // };

// //   return (
// //     <div>
// //       <button onClick={handleFindMatch} className="btn btn-primary">
// //         Find My Roommate
// //       </button>

// //       {matchResult && (
// //         <div>
// //           <h3>🎉 Match Found!</h3>
// //           <p>Match: {matchResult.matchName}</p>
// //           <p>Score: {matchResult.score}</p>
// //           <p>Reason: {matchResult.reason}</p>
// //           <p>Assigned Room: {matchResult.assignedRoom}</p>
// //         </div>
// //       )}

// //       {error && <p className="text-red-500">{error}</p>}
// //     </div>
// //   );
// // };

// // export default MatchButton;


// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import { useState } from "react";

// const MatchButton = () => {
//   const { user } = useAuth();
//   const [matchResult, setMatchResult] = useState(null);
//   const [error, setError] = useState("");

//   const handleFindMatch = async () => {
//     try {
//       console.log("Sending userId to backend:", user?._id);

//       const res = await axios.post("http://localhost:5000/api/v2/match", {
//         userId: user._id, // ✅ FIXED: use _id
//       });

//       console.log("✅ Match response:", res.data);

//       // ✅ Store match result for UI
//       setMatchResult(res.data.match || null);
//       setError("");
//     } catch (err) {
//       console.error("❌ Match error:", err.response?.data || err.message);
//       setError("❌ Matching failed. Try again.");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleFindMatch} className="btn btn-primary">
//         Find My Roommate
//       </button>

//       {matchResult && (
//         <div>
//           <h3>🎉 Match Found!</h3>
//           <p>Match: {matchResult.matchName}</p>
//           <p>Score: {matchResult.score}</p>
//           <p>Reason: {matchResult.reason}</p>
//           <p>Assigned Room: {matchResult.assignedRoom || "None"}</p>
//         </div>
//       )}

//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default MatchButton;


import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useState } from "react";

const MatchButton = () => {
  const { user } = useAuth();
  const [matchResult, setMatchResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFindMatch = async () => {
    setLoading(true);
    setError("");
    
    try {
      console.log("Sending userId to backend:", user?._id);

      const res = await axios.post("http://localhost:5000/api/v2/match", {
        userId: user._id, // ✅ FIXED: use _id
      });

      console.log("✅ Match response:", res.data);

      // ✅ Store match result for UI
      setMatchResult(res.data.match || null);
      setError("");
    } catch (err) {
      console.error("❌ Match error:", err.response?.data || err.message);
      setError("❌ Matching failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Find Your Perfect Roommate</h2>
          <p className="text-gray-600">Let our smart matching system find your ideal companion</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 backdrop-blur-sm">
          {/* Match Button */}
          <div className="text-center mb-8">
            <button 
              onClick={handleFindMatch}
              disabled={loading}
              className={`
                relative overflow-hidden px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 hover:scale-105 focus:ring-4 focus:ring-pink-300'
                }
                text-white shadow-lg hover:shadow-xl
              `}
            >
              {loading && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-500 animate-pulse"></div>
              )}
              <div className="relative flex items-center justify-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Finding Your Match...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Find My Roommate
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-center">
              <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Match Result */}
          {matchResult && (
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">🎉 Perfect Match Found!</h3>
                <p className="text-gray-600">Here's your ideal roommate match</p>
              </div>

              <div className="grid gap-4">
                {/* Match Name */}
                <div className="bg-white rounded-2xl p-6 border border-pink-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Your Roommate</p>
                      <p className="text-xl font-bold text-gray-800">{matchResult.matchName}</p>
                    </div>
                  </div>
                </div>

                {/* Compatibility Score */}
                <div className="bg-white rounded-2xl p-6 border border-pink-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm font-medium">Compatibility Score</p>
                        <p className="text-xl font-bold text-gray-800">{matchResult.score}</p>
                      </div>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
                      Excellent Match!
                    </div>
                  </div>
                </div>

                {/* Match Reason */}
                <div className="bg-white rounded-2xl p-6 border border-pink-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-2">Why You're Perfect Together</p>
                      <p className="text-gray-800 leading-relaxed">{matchResult.reason}</p>
                    </div>
                  </div>
                </div>

                {/* Assigned Room */}
                <div className="bg-white rounded-2xl p-6 border border-pink-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm font-medium">Assigned Room</p>
                        <p className="text-xl font-bold text-gray-800">
                          {matchResult.assignedRoom || "Room assignment pending"}
                        </p>
                      </div>
                    </div>
                    {matchResult.assignedRoom && (
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                        Confirmed
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-700 font-medium">
                  Congratulations! You've been successfully matched with your ideal roommate.
                </p>
              </div>
            </div>
          )}

          {/* Instructions */}
          {!matchResult && !error && (
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
              <div className="text-center">
                <svg className="w-12 h-12 text-pink-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Ready to Find Your Match?</h4>
                <p className="text-gray-600 text-sm">
                  Our advanced algorithm will analyze your preferences and lifestyle to find the perfect roommate for you. 
                  Click the button above to get started!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchButton;