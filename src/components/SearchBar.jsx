import React from "react";
import { useState } from "react";

const SearchBar = ({ setSearchVal }) => {
  let [inputVal, setInputVal] = useState("");
  function handleSearch() {
    setSearchVal(inputVal);
  }
  return (
    <div className="searchBar flex items-center justify-center gap-2 p-2.5 bg-[#f5f5f5] rounded-lg w-full max-w-100 mx-auto my-5">
      <input
        type="text"
        className="searchInput flex-1 py-2 px-3 border border-[#ccc] rounded-md text-[14] outline-none transition-colors duration-300 ease-in-out focus:border-[#ff8800] focus:shadow-[0_0_4px_rgba(0,120,215,0.3)]"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Search nearby restaurant "
      />
      <button className="searchBtn py-2.5 px-4 bg-[#ff3b3b] text-white rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#ff0000]" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default SearchBar;
