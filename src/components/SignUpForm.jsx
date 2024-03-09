import { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/SignUpForm.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState("");
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    const obtenerVideojuegos = async () => {
      const querySnapshot = await getDocs(collection(db, "videojuegos"));
      setVideojuegos(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    obtenerVideojuegos();
  }, []);

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
      // Usuario creado, ahora crearemos un documento en Firestore
      await addDoc(collection(db, "usuario"), {
        uid: userCredential.user.uid, // Usa el UID proporcionado por Auth para referencia única
        firstName: firstName,
        lastName: lastName,
        username: username,
        videoJuegoFav: videojuegoSeleccionado,
        email: email,
      });
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
        type="text"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
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
      <select
        name="videojuego"
        value={videojuegoSeleccionado}
        onChange={(e) => setVideojuegoSeleccionado(e.target.value)}
      >
        <option value="">Selecciona un videojuego</option>
        {videojuegos.map((videojuego) => (
          <option key={videojuego.id} value={videojuego.titulo}>
            {videojuego.titulo}
          </option>
        ))}
      </select>

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default SignUpForm;
