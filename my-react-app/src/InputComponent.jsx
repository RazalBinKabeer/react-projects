import { useState } from "react";

const InputComponent = () => {
  const [inputMessage, setInputMessage] = useState("");
  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        onChange={(event) => setInputMessage(event.target.value)}
        value={inputMessage}
      />
      <p>Current Input: {inputMessage}</p>
    </div>
  );
};

export default InputComponent;
