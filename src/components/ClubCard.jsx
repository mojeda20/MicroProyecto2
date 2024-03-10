import PropTypes from "prop-types";

const ClubCard = ({ nombre, descripcion, isMember }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="font-bold text-xl mb-2">{nombre}</h3>
      <p className="text-gray-700 text-base">{descripcion}</p>
      {isMember && (
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
          Miembro
        </span>
      )}
    </div>
  );
};

ClubCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
};

export default ClubCard;
