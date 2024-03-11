import PropTypes from "prop-types";
import ClubCard from "./ClubCard";
import '../styles/SearchPage.css';

const ClubList = ({ clubes, userId }) => {
  return (
    <div className="space-y-4">
      {clubes.map((club) => (
        <ClubCard
          key={club.id}
          nombre={club.nombre}
          descripcion={club.descripcion}
          isMember={club.members.includes(userId)}
        />
      ))}
    </div>
  );
};

ClubList.propTypes = {
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

export default ClubList;
