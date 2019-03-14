import PropTypes from "prop-types";

const ProfileCard = ({ name, age, location }) => {
  return (
    <div>
      <h2>Hello, {name}</h2>
      <p>Your age is {age}</p>
      <p>Your location is {location}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  location: PropTypes.string,
};

ProfileCard.defaultProps = {
  age: 0,
  location: "Unknown",
};

export default ProfileCard;
