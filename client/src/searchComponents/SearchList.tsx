'use strict'

interface SearchListProps {
  searchResult: [], 
  setTopTracks: Function, 
  handleRelatedArtistData: Function, 
  setSearchResult: Function, 
  setShowTopTracks: Function 
}

interface Artist {
  id: number,
  images: {},
  name: string
}

export const SearchList: React.FC<SearchListProps> = ({ 
  searchResult, 
  setTopTracks, 
  handleRelatedArtistData, 
  setSearchResult, 
  setShowTopTracks 
}) => {

  function handleClick (artist: Artist) {
    setTopTracks([]);
    // click creates
    handleRelatedArtistData(artist.id);
    setSearchResult([]);
    setShowTopTracks(true);
  }

  return (
    <ul className="artist-search-ul">
    {searchResult.map((artist: Artist, index: number) => (
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