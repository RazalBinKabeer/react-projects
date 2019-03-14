import { useState } from "react";

const UserGreeting = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Hello, {name ? name : "Guest"}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default UserGreeting;
