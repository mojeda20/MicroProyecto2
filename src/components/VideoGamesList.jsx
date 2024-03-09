import { useEffect, useState } from 'react';
import { firestore } from '../services/firebase'; // Suponiendo que tienes un servicio de Firebase

function VideoGamesList() {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    const fetchVideoGames = async () => {
      try {
        const videoGamesRef = firestore.collection('videojuegos');
        const snapshot = await videoGamesRef.get();
        const videoGamesData = snapshot.docs.map(doc => doc.data());
        setVideoGames(videoGamesData);
      } catch (error) {
        console.error('Error fetching video games:', error);
      }
    };

    fetchVideoGames();
  }, []);

  return (
    <div>
      <h2>Lista de Videojuegos</h2>
      <ul>
        {videoGames.map(videoGame => (
          <li key={videoGame.ID}>
            <h3>{videoGame.titulo}</h3>
            <p>Género: {videoGame.genero}</p>
            <p>Descripción: {videoGame.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoGamesList;
