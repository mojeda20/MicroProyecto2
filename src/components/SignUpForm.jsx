// src/components/SignUpForm.jsx

import { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/SignUpForm.css"; // Asegúrate de crear este archivo CSS
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      // Aquí utilizamos Firebase para registrar al usuario
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Usuario creado, puedes agregar aquí la lógica adicional si es necesario
      console.log("Usuario registrado:", userCredential);
      navigate("/landing");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Registrarse</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default SignUpForm;
