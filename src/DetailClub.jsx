import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "./firebase-config"; // Asegúrate de tener tu configuración de Firebase aquí
import useAuth from "../src/Hooks/useAuth"; // Tu hook de autenticación
import Carousel from "./CarouselDeatil"; // Tu componente Carousel personalizado
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";

const ClubDetailPage = () => {
  const [club, setClub] = useState(null);
  const [isMember, setIsMember] = useState(false);
  const { clubId } = useParams();
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClub = async () => {
      const docRef = doc(db, "clubes", clubId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setClub(data);
        setIsMember(data.members?.includes(currentUser?.uid));
      } else {
        console.log("No se encontró el club.");
        navigate("/"); // O redirigir a una página de error
      }
    };

    if (currentUser) {
      fetchClub();
    }
  }, [clubId, currentUser, navigate]);

  const handleMembership = async () => {
    const clubRef = doc(db, "clubes", clubId);
    if (isMember) {
      await updateDoc(clubRef, {
        members: arrayRemove(currentUser.uid),
      });
    } else {
      await updateDoc(clubRef, {
        members: arrayUnion(currentUser.uid),
      });
    }
    setIsMember(!isMember);
  };

  if (!club) return <div>Cargando detalles del club...</div>;

  return (
    <div className="club-detail-page">
      <Header />
      <h1>{club.nombre}</h1>
      <p>{club.descripcion}</p>

      <h2>Videojuegos</h2>
      {/* Check if there are videojuegos and only render the Carousel if there are items to show */}
      {club.videojuegos && club.videojuegos.length > 0 ? (
        <Carousel items={club.videojuegos} type="videojuegos" />
      ) : (
        <p>No hay videojuegos asociados a este club.</p>
      )}

      <h2>Miembros</h2>
      {/* Similarly, check for members before rendering the Carousel */}
      {club.members && club.members.length > 0 ? (
        <Carousel items={club.members} type="usuarios" />
      ) : (
        <p>No hay miembros en este club.</p>
      )}

      {/* The button for handling membership */}
      <button onClick={handleMembership}>
        {isMember ? "Retirarme" : "Unirme al Club"}
      </button>
    </div>
  );
};

export default ClubDetailPage;
