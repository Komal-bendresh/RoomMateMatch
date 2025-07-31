import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        {/* Add more pages here later like /login, /matches etc. */}
      </Routes>
    </Router>
  );
}

export default App;
