import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase-config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameDetail from "../src/components/GameDetail";
import UserDetail from "../src/components/UserDetail";

const Carousel = ({ items, type }) => {
  const [elements, setElements] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchElements = async () => {
      // Assumimos que los items son una lista de IDs, y que cada tipo tiene un campo 'uid'.
      const data = [];
      const q = query(collection(db, type), where("uid", "in", items));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setElements(data);
    };

    if (items.length > 0) {
      fetchElements();
    }
  }, [items, type]);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {elements.map((element, index) => (
          <div key={index} className="carousel-element">
            {type === "videojuegos" ? (
              <GameDetail game={element} />
            ) : (
              <UserDetail user={element} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["videojuegos", "usuarios"]).isRequired,
};

export default Carousel;
