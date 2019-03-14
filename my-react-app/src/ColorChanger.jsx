import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <p style={{ color: `${color}` }}>Current Color: {color}</p>
      <button style={{ color: `${color}` }} onClick={() => setColor("red")}>
        Red
      </button>
      <button style={{ color: `${color}` }} onClick={() => setColor("blue")}>
        Blue
      </button>
      <button style={{ color: `${color}` }} onClick={() => setColor("green")}>
        Green
      </button>
    </div>
  );
};

export default ColorChanger;
