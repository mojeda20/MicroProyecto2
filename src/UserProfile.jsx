import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config"; // Asegúrate de exportar tu instancia de Firestore como `db`
import useAuth from "../src/Hooks/useAuth";
import Header from "./components/Header";

function UserProfile() {
  const currentUser = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const docRef = doc(db, "usuario", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div>
      <Header />
      <h1>Perfil del Usuario</h1>
      {userData && (
        <div>
          <p>Email: {userData.email}</p>
          <p>Nombre: {userData.firstName}</p>
          <p>Username: {userData.username}</p>
          <p>Juego Favorito: {userData.videoJuegoFav}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
