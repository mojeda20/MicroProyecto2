import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import "../styles/Carousel.css";

const Carousel = () => {
  const [clubs, setClubs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "clubes"));
      const clubsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setClubs(clubsArray);
    };

    fetchData().catch(console.error);
  }, []);

  const goToPrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + clubs.length) % clubs.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % clubs.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {clubs.map((club) => (
          <div className="carousel-item" key={club.id}>
            <img
              src={club.imageUrl || "path/to/your/default-image.jpg"}
              alt={club.nombre}
            />
            <h3>{club.nombre}</h3>
            <p>{club.descripcion}</p>
            <button className="btn btn-primary">Button</button>
          </div>
        ))}
      </div>
      <div className="carousel-actions">
        <button className="carousel-prev" onClick={goToPrev}>
          ❮
        </button>
        <button className="carousel-next" onClick={goToNext}>
          ❯
        </button>
      </div>
      <div className="carousel-indicators">
        {clubs.map((club, index) => (
          <button
            key={club.id}
            className={`carousel-indicator ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
