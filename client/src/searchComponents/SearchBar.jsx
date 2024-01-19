import React from "react";
import { BsSearchHeart } from "react-icons/bs";


export function SearchBar ({ search, handleSearch, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()} >
      <input
        type="text"
        size="50"
        name=""
        id="search"
        role="searchbox"
        placeholder=" Find music like..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} type="submit" id="submitButton">
        <BsSearchHeart />
      </button>
    </form>
  )
};

export default SearchBar;