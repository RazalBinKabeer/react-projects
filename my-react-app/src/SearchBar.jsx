import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="text"
      />
      <button
        disabled={searchQuery === ""}
        onClick={() => {
          alert(`Searching for ${searchQuery}`);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
