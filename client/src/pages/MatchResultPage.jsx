import React from "react";
import MatchResult from "../components/MatchResult";

const MatchResultPage = () => {
  // Example data — in production, fetch from backend or pass via router state
  const result = {
    matchName: "Aarav Mehta",
    score: 92,
    explanation:
      "Aarav shares your study hours, food preferences, and is a non-smoker. Highly compatible for peaceful living.",
    room: "Room C-104",
  };

  return <MatchResult {...result} />;
};

export default MatchResultPage;
