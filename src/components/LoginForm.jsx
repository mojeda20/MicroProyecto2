import { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí utilizamos Firebase para autenticar al usuario
      await signInWithEmailAndPassword(auth, username, password);
      // Si la autenticación es exitosa, puedes redirigir al usuario a otra página o actualizar el estado de la aplicación
      navigate("/landing");
    } catch (error) {
      // Aquí manejas errores de autenticación, como usuario no encontrado o contraseña incorrecta
      setError(error.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Inicio de Sesión</h2>
      <div className="input-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
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
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default LoginForm;
