import PropTypes from "prop-types";

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
