import { useState } from "react";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/landing");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/landing");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Inicio de Sesión</h2>
      <p>
        No tienes cuenta? <Link to="/signup">Regístrate</Link>
      </p>
      <div className="input-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="submit-btn">
        Iniciar Sesión
      </button>
      <button type="button" onClick={signInWithGoogle}>
        Iniciar sesión con Google
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default LoginForm;
