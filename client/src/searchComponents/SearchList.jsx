import React from "react";

export function SearchList ({ searchResult, setTopTracks, handleRelatedArtistData, setSearchResult, setShowTopTracks }) {

  function handleClick (artist) {
    setTopTracks([]);
    // click creates
    handleRelatedArtistData(artist.id);
    setSearchResult([]);
    setShowTopTracks(true);
  }

  return (
    <ul className="artist-search-ul">
    {searchResult.map((artist, index) => (
      <li
        className="artist-search-li"
        onClick={() => handleClick(artist)}
        key={index}
      >
        <div className="artist-search-thumb-container">
          {artist.images[2] && (
             <img className= "artist-s earch-thumb-img"src={artist.images[2].url}alt=""/>
          )}
        </div>
        <div className="artist-search-name">{artist.name}</div>
      </li>
    ))}
  </ul>
  )
};

export default SearchList;