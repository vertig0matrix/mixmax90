'use strict';

import React from "react";
import { TbReload } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import TrackItem from "./TrackItem.js";
import { Track } from "../Interfaces/track.interface.js";

export interface TopTracksProps {
  showTopTracks: boolean,
  heartColor: string,
  heartClick: Function,
  setTopTracks: Function,
  handleRelatedArtistData: Function,
  setSearchResult: Function,
  setShowTopTracks: Function,
  topTracks: Track[],
  artistId: string
};

export const TopTracks: React.FC<TopTracksProps> = ({
  showTopTracks,
  heartColor,
  heartClick,
  setTopTracks,
  handleRelatedArtistData,
  setSearchResult,
  setShowTopTracks,
  topTracks,
  artistId
}) => {

  function handleClick(artistId: string) {
    setTopTracks([]);
    handleRelatedArtistData(artistId);
    setSearchResult([]);
    setShowTopTracks(true);
  };

  return (
    <div>
      {showTopTracks && (
        <ul className="top-tracks-ul">
          <div className="top-tracks-ul-title-container">
            <div
              className="top-tracks-ul-title-container-icon"
              onClick={() => handleClick(artistId)}
            >
              <TbReload></TbReload>
            </div>
            <div className="top-tracks-title">Nice work!</div>
            <GoHeart
              className="top-tracks-ul-title-container-icon"
              id="heart"
              style={{ color: heartColor }}
              onClick={() => handleClick(artistId)}
            />
          </div>
          {topTracks.map((track, index) => (
            <TrackItem track={track} index={index} key={index} />
          ))}
        </ul>
      )}
    </div>
  )
};

export default TopTracks;
