import PropTypes from "prop-types";
import "../styles/UserDetail.css";

const UserDetail = ({ user }) => {
  return (
    <div>
      <h3>{user.username}</h3>
    </div>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;
