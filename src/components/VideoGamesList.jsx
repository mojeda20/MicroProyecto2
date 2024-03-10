import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const VideoGamesList = () => {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "videojuegos"));
      const clubsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setVideoGames(clubsArray);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <h1>Videojuegos</h1>
      <ul>
        {videoGames.map((videoGame) => (
          <li key={videoGame.id}>
            <h2>{videoGame.titulo}</h2>
            <p>{videoGame.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoGamesList;
