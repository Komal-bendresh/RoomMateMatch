import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("/api/admin/data")
      .then((res) => setData(res.data))
      .catch(() => alert("Failed to load admin data."));
  }, []);

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.match.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ["Name", "Match", "Score", "Room", "Timestamp"];
    const rows = filtered.map(item => [item.name, item.match, item.score, item.room, item.timestamp]);

    const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "admin_data.csv";
    link.click();
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📊 Admin Dashboard</h1>
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Export CSV
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by Name or Match..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded-lg shadow-sm"
      />

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-600">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Match</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Room</th>
              <th className="px-4 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filtered.map((user, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 font-semibold">{user.name}</td>
                <td className="px-4 py-2">{user.match}</td>
                <td className={`px-4 py-2 ${user.score >= 80 ? "text-green-600" : user.score >= 50 ? "text-yellow-600" : "text-red-600"}`}>{user.score}</td>
                <td className="px-4 py-2">{user.room}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
