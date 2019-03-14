import { useState } from "react";
import ToggleVisibility from "./ToggleVisibility";
import InputField from "./InputField";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>

//       {/* Button to increment the count */}
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       {/* Button to decrement the count */}
//       <button disabled={!count} onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>

//       {/* Reset Button */}
//       <button
//         disabled={!count}
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <InputField />

      <p>This is your first react component using vite</p>
    </div>
  );
};

export default App;
