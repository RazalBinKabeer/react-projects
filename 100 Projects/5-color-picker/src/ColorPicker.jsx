import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h1 style={{ color: `${color === "#ffffff" ? "#000000" : "#ffffff"}` }}>
        Pick a Color
      </h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
