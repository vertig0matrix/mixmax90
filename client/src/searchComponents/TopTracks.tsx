'use strict';

import React from "react";
import { TbReload } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import TrackItem from "./TrackItem.tsx";
import { Track } from "../Interfaces/track.interface.ts";
import { addTopTracksToDB } from "../components/apiServices.js";

export interface TopTracksProps {
  showTopTracks: boolean,
  heartColor: string,
  heartClick: Function,
  setTopTracks: React.Dispatch<React.SetStateAction<Track[]>>,
  handleRelatedArtistData: Function,
  setSearchResult: React.Dispatch<React.SetStateAction<[]>>,
  setShowTopTracks: React.Dispatch<React.SetStateAction<boolean>>,
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
    addTopTracksToDB(topTracks)
  };

  return (
    <div>
      {showTopTracks && (
        <>
          <div className="top-tracks-ul-title-container">
            <div
              role="button"
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
          <ul className="top-tracks-ul">
            {topTracks.map((track, index) => (
              <li>
                <TrackItem track={track} index={track.id} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
};

export default TopTracks;
