'use strict';

import React from "react";
import { TbReload } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import TrackItem, { TrackItemProps } from "./TrackItem.js"
import internal from "stream";


interface TopTracksProps {
  showTopTracks: boolean,
  heartColor: string,
  heartClick: Function,
  setTopTracks: Function,
  handleRelatedArtistData: Function,
  setSearchResult: Function,
  setShowTopTracks: Function,
  topTracks: [],
  artistId: string

}

export function TopTracks({
  showTopTracks,
  heartColor,
  heartClick,
  setTopTracks,
  handleRelatedArtistData,
  setSearchResult,
  setShowTopTracks,
  topTracks,
  artistId
}: TopTracksProps) {

  function handleClick(artistId: string): void {
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
              <TbReload></TbReload>
            </div>
            <div className="top-tracks-title">Nice work!</div>
            <GoHeart
              className="top-tracks-ul-title-container-icon"
              id="heart"
              style={{ color: heartColor }}
              onClick={() => heartClick}
            />
          </div>
          {topTracks.map(({ track, index }: TrackItemProps) => (
            <TrackItem track={track} index={index} />
          ))}
        </ul>
      )}
    </div>
  )
};
