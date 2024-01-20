'use strict';

import { BsSearchHeart } from "react-icons/bs";
import { Search } from "react-router-dom";

interface SearchBarProps {
  search: string,
  handleSearch: Function,
  setSearch: Function
}

export const SearchBar: React.FC<SearchBarProps> = ({ search, handleSearch, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()} >
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder=" Find music like..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => handleSearch} type="submit" id="submitButton">
        <BsSearchHeart />
      </button>
    </form>
  )
};

export default SearchBar;