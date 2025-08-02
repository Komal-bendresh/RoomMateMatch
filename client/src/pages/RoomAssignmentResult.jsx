// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import API from '../../api'; 

// // // const RoomAssignmentResult = () => {
// // //   const [userData, setUserData] = useState(null);
// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const res = await API.get(`/users/${user.id}`, {
// // //           withCredentials: true,
// // //         });
// // //         setUserData(res.data);
// // //       } catch (err) {
// // //         console.error("Failed to load room/match info", err);
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
// // //           <p><strong>Compatibility Score:</strong> {userData.match.score}</p>
// // //           <p><strong>Reason:</strong> {userData.match.reason}</p>
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
// //       {userData.match ? (
// //         <div>
// //           <p><strong>Name:</strong> {userData.match.name}</p>
// //           {matchData ? (
// //             <>
// //               <p><strong>Compatibility Score:</strong> {matchData.score}</p>
// //               <p><strong>Reason:</strong> {matchData.reason}</p>
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

//         if (res.data.match) {
//           const matchRes = await API.get(`/match/by-user/${user.id}`);
//           setMatchData(matchRes.data);
//         }
//       } catch (err) {
//         console.error("❌ Failed to load room or match info", err);
//       }
//     };

//     if (user && user.id) fetchUserData();
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
//         {userData.match ? (
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

import React, { useEffect, useState } from "react";
import API from '../../api'; 

const RoomAssignmentResult = () => {
  const [userData, setUserData] = useState(null);
  const [matchData, setMatchData] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await API.get(`/users/${user.id}`);
        setUserData(res.data);

        // If match exists, fetch match details
        if (res.data.match) {
          const matchRes = await API.get(`/match/by-user/${user.id}`);
          setMatchData(matchRes.data);
        }
      } catch (err) {
        console.error("❌ Failed to load room or match info", err);
      }
    };

    if (user?.id) fetchUserData();
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
          <p><strong>Name:</strong> {userData.match.name || "Unnamed User"}</p>
          {matchData ? (
            <>
              <p><strong>Compatibility Score:</strong> {matchData.score?.toFixed(2) ?? "N/A"}</p>
              <p><strong>Reason:</strong> {matchData.reason || "No reason provided"}</p>
            </>
          ) : <p>Fetching match details...</p>}
        </div>
      ) : (
        <p>❌ No match found yet.</p>
      )}
    </div>
  );
};

export default RoomAssignmentResult;
