import React from 'react';
import { BsSearchHeart } from "react-icons/bs";

export interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch, handleSearch }) => {

  return (
    <form className="searchForm" onSubmit={(e) => { e.preventDefault(); handleSearch(); }} >
      <input
        type="text"
        name="search"
        id="search"
        role="searchbox"
        placeholder=" Find music like..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" id="submitButton">
        <BsSearchHeart />
      </button>
    </form>
  );
};

export default SearchBar;
