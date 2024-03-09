import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const ClubsList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const clubsCollection = await firebase
        .firestore()
        .collection("clubes")
        .get();
      const clubsData = clubsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClubs(clubsData);
    };

    fetchClubs();
  }, []);

  return (
    <div>
      <h1>Clubs</h1>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <h2>{club.nombre}</h2>
            <p>{club.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubsList;
