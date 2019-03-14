import PropTypes from "prop-types";

const UserGreeting = ({ username }) => {
  return (
    <div>
      <h3>Hello, {username}! Welcome back.</h3>
    </div>
  );
};

UserGreeting.propTypes = {
  username: PropTypes.string.isRequired,
};

UserGreeting.defaultProps = {
  username: "",
};

export default UserGreeting;
