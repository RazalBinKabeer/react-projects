import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: `${isOn ? "green" : "red"} ` }}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? "Switch Off" : "Switch On"}
      </button>
    </div>
  );
};

export default ToggleSwitch;
