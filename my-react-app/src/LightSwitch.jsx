import { useState } from "react";

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "🔦" : "💡"}</button>
      <p style={{ color: `${isOn ? "yellow" : "gray"}` }}>
        {isOn ? "The light is ON 🔦" : "The light is OFF 💡"}
      </p>
    </div>
  );
};

export default LightSwitch;
