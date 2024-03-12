import Slider from "react-slick";
import ClubCard from "../src/components/ClubCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ClubCarousel = ({ clubes, userId }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajusta este valor según el número de tarjetas que quieras mostrar a la vez
    slidesToScroll: 3, // Ajusta este valor según el número de tarjetas que quieras desplazar a la vez
  };

  const navigate = useNavigate();

  const handleCardClick = (clubId) => {
    navigate(`/club/${clubId}`);
  };

  return (
    <Slider {...settings}>
      {clubes.map((club) => (
        <div key={club.id}>
          <div key={club.id} onClick={() => handleCardClick(club.id)}>
            <ClubCard
              nombre={club.nombre}
              descripcion={club.descripcion}
              isMember={club.members.includes(userId)}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

ClubCarousel.propTypes = {
  clubes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      members: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  userId: PropTypes.string,
};

export default ClubCarousel;
