import { useState } from "react";

const FormComponent = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setFname(e.target.value)}
        type="text"
        value={fname}
        placeholder="First Name"
      />
      <input
        onChange={(e) => setLname(e.target.value)}
        type="text"
        value={lname}
        placeholder="Last Name"
      />

      <p>
        Hello, {fname} {lname}
      </p>

      <button
        onClick={() => {
          setFname("");
          setLname("");
        }}
        disabled={(fname === "") & (lname === "")}
      >
        Clear
      </button>
    </div>
  );
};

export default FormComponent;
