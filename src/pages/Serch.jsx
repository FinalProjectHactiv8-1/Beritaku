import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  // take input value from search
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // navigate to the search page with the input value
  const handleSearch = () => {
    navigate(`/search/${input}`);
    setInput("");
  };
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search For..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full rounded-md px-2 py-2.5 pe-10 shadow-sm sm:text-sm"
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700"
          onClick={handleSearch}
        >
          <FaMagnifyingGlass />
        </button>
      </span>
    </div>
  );
}

export default Search;