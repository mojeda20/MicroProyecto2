import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Asegúrate de importar tu nueva Landing Page
import SignUpForm from "./components/SignUpForm";
import BuscadorPage from "./BuscadorPage";

// ... otros imports
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/buscador" element={<BuscadorPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
