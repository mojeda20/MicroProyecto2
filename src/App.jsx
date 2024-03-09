import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Asegúrate de importar tu nueva Landing Page
import ClubsList from './ClubsList';
import VideoGamesList from './VideoGamesList';

// ... otros imports
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/clubs" element={<ClubsList />} /> 
        <Route path="/videogames" element={<VideoGamesList />} /> 
      </Routes>
    </Router>
  );

}

export default App;