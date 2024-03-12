import PropTypes from "prop-types";

const GameDetail = ({ game }) => {
  return (
    <div>
      <h3>{game.nombre}</h3>
      <h2>{game.genero}</h2>
      <p>{game.descripcion}</p>
    </div>
  );
};

GameDetail.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameDetail;
