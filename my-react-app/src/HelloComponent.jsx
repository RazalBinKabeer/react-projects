import { useState } from "react";
import PropTypes from "prop-types";

const HelloComponent = ({ name, description }) => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>{description}</p>

      {showMessage && <p>This message is triggered by the button and state </p>}

      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
    </div>
  );
};

HelloComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

HelloComponent.defaultProps = { description: "No description provided" };

export default HelloComponent;
