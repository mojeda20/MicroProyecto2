import PropTypes from "prop-types";
import ClubCard from "./ClubCard";
import "../styles/Carousel.css";

const CarouselItem = ({ club, isMember }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClubCard
        nombre={club.nombre}
        descripcion={club.descripcion}
        isMember={isMember}
      />
    </div>
  );
};

CarouselItem.propTypes = {
  club: PropTypes.object.isRequired,
  isMember: PropTypes.bool.isRequired,
};

export default CarouselItem;
