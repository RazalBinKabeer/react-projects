import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: "2rem" }}>{count}</p>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
