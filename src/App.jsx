import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Asegúrate de importar tu nueva Landing Page
import SignUpForm from "./components/SignUpForm";
import VideoGamesList from "./components/VideoGamesList";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/videojuegos" element={<VideoGamesList />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
