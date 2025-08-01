import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import SurveyPage from "./pages/SurveyPage";
import Layout from "./components/Layout";
import MatchResultPage from "./pages/MatchResultPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AIPlayground from "./pages/AIPlayground";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        {/* <Route index element={<Home />} /> */}
        <Route path="/signup" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/survay" element={<SurveyPage />} />
        <Route path="/result" element={<MatchResultPage />} />
        <Route path="/playground" element={<AIPlayground />} />
       
        <Route path="/admin" element={<AdminDashboard />} />
        </Route >
      </Routes>
    </Router>
  );
}

export default App;
