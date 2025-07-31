import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import SurveyPage from "./pages/SurveyPage";
import { Routes, Route } from "react-router-dom";
import MatchResultPage from "./pages/MatchResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        {/* Add more pages here later like /login, /matches etc. */}
        <Route path="/result" element={<MatchResultPage />} />
        {/* other routes */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
