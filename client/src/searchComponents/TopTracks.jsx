import React from "react";
import { TbReload } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import TrackItem from "./TrackItem";

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

  function handleClick (artistId) {
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

            <TrackItem track={track} key={index} />
          ))}
        </ul>
      )}
    </div>
  )
};

export default TopTracks;
