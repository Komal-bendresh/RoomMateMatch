// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import API from '../../api'; 

// // // // const RoomAssignmentResult = () => {
// // // //   const [userData, setUserData] = useState(null);
// // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // //   useEffect(() => {
// // // //     const fetchUserData = async () => {
// // // //       try {
// // // //         const res = await API.get(`/users/${user.id}`, {
// // // //           withCredentials: true,
// // // //         });
// // // //         setUserData(res.data);
// // // //       } catch (err) {
// // // //         console.error("Failed to load room/match info", err);
// // // //       }
// // // //     };

// // // //     if (user && user.id) fetchUserData();
// // // //   }, []);

// // // //   if (!userData) return <p>Loading...</p>;

// // // //   return (
// // // //     <div className="p-4 rounded shadow max-w-xl mx-auto bg-white">
// // // //       <h2 className="text-2xl font-bold mb-4">🛏️ Your Room Assignment</h2>

// // // //       {userData.assignedRoom ? (
// // // //         <div className="mb-6">
// // // //           <p><strong>Room Number:</strong> {userData.assignedRoom.roomNumber}</p>
// // // //           <p><strong>Room Type:</strong> {userData.assignedRoom.type}</p>
// // // //         </div>
// // // //       ) : (
// // // //         <p>❌ No room assigned yet.</p>
// // // //       )}

// // // //       <h3 className="text-xl font-semibold mb-2">👭 Your Best Match</h3>
// // // //       {userData.match ? (
// // // //         <div>
// // // //           <p><strong>Name:</strong> {userData.match.name}</p>
// // // //           <p><strong>Compatibility Score:</strong> {userData.match.score}</p>
// // // //           <p><strong>Reason:</strong> {userData.match.reason}</p>
// // // //         </div>
// // // //       ) : (
// // // //         <p>❌ No match found yet.</p>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RoomAssignmentResult;

// // // import React, { useEffect, useState } from "react";
// // // import API from '../../api'; 

// // // const RoomAssignmentResult = () => {
// // //   const [userData, setUserData] = useState(null);
// // //   const [matchData, setMatchData] = useState(null);

// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const res = await API.get(`/users/${user.id}`);
// // //         setUserData(res.data);

// // //         if (res.data.match) {
// // //           const matchRes = await API.get(`/match/by-user/${user.id}`);
// // //           setMatchData(matchRes.data);
// // //         }
// // //       } catch (err) {
// // //         console.error("❌ Failed to load room or match info", err);
// // //       }
// // //     };

// // //     if (user && user.id) fetchUserData();
// // //   }, []);

// // //   if (!userData) return <p>Loading...</p>;

// // //   return (
// // //     <div className="p-4 rounded shadow max-w-xl mx-auto bg-white">
// // //       <h2 className="text-2xl font-bold mb-4">🛏️ Your Room Assignment</h2>

// // //       {userData.assignedRoom ? (
// // //         <div className="mb-6">
// // //           <p><strong>Room Number:</strong> {userData.assignedRoom.roomNumber}</p>
// // //           <p><strong>Room Type:</strong> {userData.assignedRoom.type}</p>
// // //         </div>
// // //       ) : (
// // //         <p>❌ No room assigned yet.</p>
// // //       )}

// // //       <h3 className="text-xl font-semibold mb-2">👭 Your Best Match</h3>
// // //       {userData.match ? (
// // //         <div>
// // //           <p><strong>Name:</strong> {userData.match.name}</p>
// // //           {matchData ? (
// // //             <>
// // //               <p><strong>Compatibility Score:</strong> {matchData.score}</p>
// // //               <p><strong>Reason:</strong> {matchData.reason}</p>
// // //             </>
// // //           ) : <p>Fetching match details...</p>}
// // //         </div>
// // //       ) : (
// // //         <p>❌ No match found yet.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default RoomAssignmentResult;
// // import React, { useEffect, useState } from "react";
// // import API from '../../api'; 

// // const RoomAssignmentResult = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [matchData, setMatchData] = useState(null);

// //   const user = JSON.parse(localStorage.getItem("user"));

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const res = await API.get(`/users/${user.id}`);
// //         setUserData(res.data);

// //         if (res.data.match) {
// //           const matchRes = await API.get(`/match/by-user/${user.id}`);
// //           setMatchData(matchRes.data);
// //         }
// //       } catch (err) {
// //         console.error("❌ Failed to load room or match info", err);
// //       }
// //     };

// //     if (user && user.id) fetchUserData();
// //   }, []);

// //   if (!userData) return <p>Loading...</p>;

// //   return (
// //     <div className="p-4 rounded shadow max-w-xl mx-auto bg-white">
// //       <h2 className="text-2xl font-bold mb-4">🛏️ Your Room Assignment</h2>

// //       {userData.assignedRoom ? (
// //         <div className="mb-6">
// //           <p><strong>Room Number:</strong> {userData.assignedRoom.roomNumber}</p>
// //           <p><strong>Room Type:</strong> {userData.assignedRoom.type}</p>
// //         </div>
// //       ) : (
// //         <p>❌ No room assigned yet.</p>
// //       )}

// //       <h3 className="text-xl font-semibold mb-2">👭 Your Best Match</h3>
// //         {userData.match ? (
// //         <div>
// //           <p><strong>Name:</strong> {userData.match.name || "Unnamed User"}</p>
// //           {matchData ? (
// //             <>
// //               <p><strong>Compatibility Score:</strong> {matchData.score?.toFixed(2) ?? "N/A"}</p>
// //               <p><strong>Reason:</strong> {matchData.reason || "No reason provided"}</p>
// //             </>
// //           ) : <p>Fetching match details...</p>}
// //         </div>
// //       ) : (
// //         <p>❌ No match found yet.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default RoomAssignmentResult;

// import React, { useEffect, useState } from "react";
// import API from '../../api'; 

// const RoomAssignmentResult = () => {
//   const [userData, setUserData] = useState(null);
//   const [matchData, setMatchData] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await API.get(`/users/${user.id}`);
//         setUserData(res.data);

//         // If match exists, fetch match details
//         if (res.data.match) {
//           const matchRes = await API.get(`/match/by-user/${user.id}`);
//           setMatchData(matchRes.data);
//         }
//       } catch (err) {
//         console.error("❌ Failed to load room or match info", err);
//       }
//     };

//     if (user?.id) fetchUserData();
//   }, []);

//   if (!userData) return <p>Loading...</p>;

//   return (
//     <div className="p-4 rounded shadow max-w-xl mx-auto bg-white">
//       <h2 className="text-2xl font-bold mb-4">🛏️ Your Room Assignment</h2>

//       {userData.assignedRoom ? (
//         <div className="mb-6">
//           <p><strong>Room Number:</strong> {userData.assignedRoom.roomNumber}</p>
//           <p><strong>Room Type:</strong> {userData.assignedRoom.type}</p>
//         </div>
//       ) : (
//         <p>❌ No room assigned yet.</p>
//       )}

//       <h3 className="text-xl font-semibold mb-2">👭 Your Best Match</h3>
//       {userData.match ? (
//         <div>
//           <p><strong>Name:</strong> {userData.match.name || "Unnamed User"}</p>
//           {matchData ? (
//             <>
//               <p><strong>Compatibility Score:</strong> {matchData.score?.toFixed(2) ?? "N/A"}</p>
//               <p><strong>Reason:</strong> {matchData.reason || "No reason provided"}</p>
//             </>
//           ) : <p>Fetching match details...</p>}
//         </div>
//       ) : (
//         <p>❌ No match found yet.</p>
//       )}
//     </div>
//   );
// };

// export default RoomAssignmentResult;


// import React, { useEffect, useState } from "react";
// import API from "../../api"; 

// const RoomAssignmentResult = () => {
//   const [userData, setUserData] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await API.get(`/users/${user._id}`); // ✅ use _id
//         setUserData(res.data);
//       } catch (err) {
//         console.error("❌ Failed to load room or match info", err);
//       }
//     };

//     if (user?._id) fetchUserData();
//   }, []);

//   if (!userData) return <p>Loading...</p>;

//   return (
//     <div className="p-4 rounded shadow max-w-xl mx-auto bg-white">
//       <h2 className="text-2xl font-bold mb-4">🛏️ Your Room Assignment</h2>

//       {userData.assignedRoom ? (
//         <div className="mb-6">
//           <p><strong>Room Number:</strong> {userData.assignedRoom.roomNumber}</p>
//           <p><strong>Room Type:</strong> {userData.assignedRoom.type}</p>
//         </div>
//       ) : (
//         <p>❌ No room assigned yet.</p>
//       )}

//       <h3 className="text-xl font-semibold mb-2">👭 Your Best Match</h3>
//       {userData.matchDetails && userData.matchDetails.name ? (
//         <div>
//           <p><strong>Name:</strong> {userData.matchDetails.name}</p>
//           <p><strong>Compatibility Score:</strong> {userData.matchDetails.score ?? "N/A"}</p>
//           <p><strong>Reason:</strong> {userData.matchDetails.reason || "No reason provided"}</p>
//         </div>
//       ) : (
//         <p>❌ No match found yet.</p>
//       )}
//     </div>
//   );
// };

// export default RoomAssignmentResult;

import React, { useEffect, useState } from "react";
import API from "../../api"; 

const RoomAssignmentResult = () => {
  const [userData, setUserData] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await API.get(`/users/${user._id}`); // ✅ use _id
        setUserData(res.data);
      } catch (err) {
        console.error("❌ Failed to load room or match info", err);
      }
    };

    if (user?._id) fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border border-pink-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-pink-600 font-semibold text-lg">Loading your room details...</p>
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 pt-8">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Room Assignment</h2>
          <p className="text-gray-600">Here's your perfect match and room details</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Room Assignment Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Room Details</h3>
            </div>

            {userData.assignedRoom ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-semibold">Room Number</span>
                    <span className="text-2xl font-bold text-pink-600">{userData.assignedRoom.roomNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">Room Type</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                      {userData.assignedRoom.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-green-600 bg-green-50 rounded-xl p-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Room successfully assigned!</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">No room assigned yet</p>
                <p className="text-gray-400 text-sm mt-2">Please check back later</p>
              </div>
            )}
          </div>

          {/* Match Details Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Your Best Match</h3>
            </div>

            {userData.matchDetails && userData.matchDetails.name ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-800">{userData.matchDetails.name}</p>
                      <p className="text-gray-600 text-sm">Your roommate</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">Compatibility Score</span>
                      <div className="flex items-center">
                        <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {userData.matchDetails.score ?? "N/A"}
                        </div>
                        <svg className="w-4 h-4 text-pink-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-pink-100">
                      <p className="text-gray-600 text-sm font-medium mb-1">Match Reason:</p>
                      <p className="text-gray-800">{userData.matchDetails.reason || "No reason provided"}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-green-600 bg-green-50 rounded-xl p-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-medium">Perfect match found!</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">No match found yet</p>
                <p className="text-gray-400 text-sm mt-2">We're still finding your perfect roommate</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-lg font-semibold text-gray-800">Need Help?</h4>
            </div>
            <p className="text-gray-600 text-sm">
              If you have any questions about your room assignment or roommate match, 
              please contact our support team. We're here to make your stay comfortable!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomAssignmentResult;