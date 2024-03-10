import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";

const Buscador = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [videojuegosFiltrados, setVideojuegosFiltrados] = useState([]);

  useEffect(() => {
    const fetchVideojuegos = async () => {
        const q = query(collection(db, 'videojuegos'), orderBy('titulo'));
        const querySnapshot = await getDocs(q);
        const videojuegosArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVideojuegos(videojuegosArray);
        setVideojuegosFiltrados(videojuegosArray);
    };

    fetchVideojuegos().catch(console.error);
  }, []);

  useEffect(() => {
    const filteredVideojuegos = videojuegos.filter((videojuego) =>
      videojuego.titulo.toLowerCase().includes(filtro.toLowerCase())
    );
    setVideojuegosFiltrados(filteredVideojuegos);
  }, [filtro, videojuegos]);

  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar videojuego..."
        value={filtro}
        onChange={handleInputChange}
      />
      <ul>
        {videojuegosFiltrados.map((videojuego) => (
          <li key={videojuego.id}>
            <h3>{videojuego.titulo}</h3>
            <p>Género: {videojuego.genero}</p>
            <p>Descripción: {videojuego.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buscador;