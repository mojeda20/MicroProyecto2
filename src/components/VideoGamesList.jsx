import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const VideoGamesList = () => {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    const fetchVideoGames = async () => {
      const videoGamesCollection = await firebase
        .firestore()
        .collection("videojuegos")
        .get();
      const videoGamesData = videoGamesCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideoGames(videoGamesData);
    };

    fetchVideoGames();
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
