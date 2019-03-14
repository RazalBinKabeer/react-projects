import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Number: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
