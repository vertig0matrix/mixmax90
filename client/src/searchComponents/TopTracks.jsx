import React from "react";
import { TbReload } from "react-icons/tb";
import { GoHeart } from "react-icons/go";

export function TopTracks ({ 
  showTopTracks, 
  heartColor, 
  heartClick, 
  setTopTracks, 
  handleRelatedArtistData, 
  setSearchResult, 
  setShowTopTracks,
  topTracks,
  artistId
  }) {

  function handleClick(artistId) {
    setTopTracks([]);
    handleRelatedArtistData(artistId);
    setSearchResult([]);
    setShowTopTracks(true);
  }
  return (
    <div>
      {showTopTracks && (
        <ul className="top-tracks-ul">
          <div className="top-tracks-ul-title-container">
            <div
              className="top-tracks-ul-title-container-icon"
              onClick={() => handleClick(artistId)}
            >
              <TbReload />
            </div>
            <div className="top-tracks-title">Nice work!</div>
            <div
              className="top-tracks-ul-title-container-icon"
              id="heart"
              style={{ color: heartColor }}
              onClick={heartClick}
            >
              <GoHeart />
            </div>
          </div>
          {topTracks.map((track, index) => (
            <li className="top-tracks-li" key={index}>
              <div className="top-tracks-thumb-container">
                {track.album.images[2] && (
                  <img
                    className="top-tracks-thumb-img"
                    src={track.album.images[2].url}
                    alt=""
                  />
                )}
              </div>
              <div className="track-details">
                <div className="track-details-track">{`${track.name}`}</div>
                <div className="track-details-artist">{`${track.artists[0].name}`}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default TopTracks;
