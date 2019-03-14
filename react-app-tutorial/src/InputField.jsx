import { useState } from "react";

const InputField = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        maxLength="10"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (inputValue === "") setCount(0);
          else setCount(inputValue.length);
        }}
        type="text"
      />
      <p>{count}</p>
    </div>
  );
};

export default InputField;
