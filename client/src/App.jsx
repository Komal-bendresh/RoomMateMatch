import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import SurveyPage from "./pages/SurveyPage";
import Layout from "./components/Layout";
import RoomAssignmentResult from "./pages/RoomAssignmentResult";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AIPlayground from "./pages/AIPlayground";
import RoomMateAIHomepage from "./pages/Home";
import  RoommateChat from "./pages/Chatbot";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Layout />}>
  <Route path="/" element={<RoomMateAIHomepage />} /> {/* Explicit path */}
  <Route path="/signup" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/survay" element={<SurveyPage />} />
  <Route path="/result" element={<RoomAssignmentResult />} />
  <Route path="/playground" element={<AIPlayground />} />
  <Route path="/chat" element={<RoommateChat />} />

  
  
</Route>
      </Routes>
    </Router>
  );
}

export default App;
