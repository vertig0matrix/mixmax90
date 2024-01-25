'use strict'

import { Track } from "../Interfaces/track.interface.ts";
import { addTopTracksToDB } from "../components/apiServices.js";

interface SearchListProps {
  searchResult: [],
  setTopTracks: React.Dispatch<React.SetStateAction<Track[]>>,
  handleRelatedArtistData: Function,
  setSearchResult: React.Dispatch<React.SetStateAction<[]>>,
  setShowTopTracks: React.Dispatch<React.SetStateAction<boolean>>,
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

  function handleClick(artist: Artist) {
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
          data-testid='test-id'
        >
          <div className="artist-search-thumb-container">
            {artist.images[2] && (
              <img className="artist-s earch-thumb-img" src={artist.images[2].url} alt="" />
            )}
          </div>
          <div className="artist-search-name">{artist.name}</div>
        </li>
      ))}
    </ul>
  )
};

export default SearchList;