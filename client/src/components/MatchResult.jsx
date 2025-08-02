import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../api'; // your axios instance

export default function MatchResult() {
  const { userId } = useParams(); // assuming route like /result/:userId
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const res = await API.get(`/match/${userId}`);
        setMatchData(res.data);
      } catch (error) {
        console.error('Error fetching match:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMatch();
  }, [userId]);

  const getScoreBadge = (score) => {
    if (score >= 75) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (!matchData) return <p className="text-center mt-8">No match found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Roommate Match Result</h1>

      <div className="bg-white shadow rounded p-4 space-y-4">
        <div>
          <p className="text-sm text-gray-500">Match Name</p>
          <h2 className="text-lg font-semibold">{matchData.matchName}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Compatibility Score</p>
          <span className={`inline-block px-3 py-1 rounded-full text-white ${getScoreBadge(matchData.score)}`}>
            {matchData.score}%
          </span>
        </div>

        <div>
          <p className="text-sm text-gray-500">Explanation</p>
          <p className="text-gray-700">{matchData.explanation}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Assigned Room</p>
          <p className="font-medium">{matchData.assignedRoom || 'Not assigned yet'}</p>
        </div>

        {/* Optional: Download/Share */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download as PDF
          </button>
          <button
            onClick={() => navigator.share && navigator.share({ title: 'My Roommate Match', text: JSON.stringify(matchData) })}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
