import { useState } from "react";

const ToggleVisibility = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>The Text below renders only when the button is clicked</h2>

      {toggle && <p>This text is shown/hidden using the button below</p>}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {!toggle ? "Show" : "Hide"}
      </button>
    </div>
  );
};

export default ToggleVisibility;
