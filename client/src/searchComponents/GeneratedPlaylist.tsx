'use strict';

import React, {useState } from "react";
import { TbReload } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import TrackItem from "./TrackItem.tsx";
import { Track } from "../Interfaces/track.interface.ts";
import { addTopTracksToDB } from "../components/apiServices.js";

export interface TopTracksProps {
  showTopTracks: boolean,
  heartColor: string,
  setTopTracks: React.Dispatch<React.SetStateAction<Track[]>>,
  handleRelatedArtistData: Function,
  setSearchResult: React.Dispatch<React.SetStateAction<[]>>,
  setShowTopTracks: React.Dispatch<React.SetStateAction<boolean>>,
  topTracks: Track[],
  artistId: string
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>
};

export const TopTracks: React.FC<TopTracksProps> = ({
  showTopTracks,
  heartColor,
  setTopTracks,
  handleRelatedArtistData,
  setSearchResult,
  setShowTopTracks,
  topTracks,
  artistId,
  name,
  setName
}) => {

  const [status, setStatus] = useState("")
<<<<<<< HEAD:client/src/searchComponents/GeneratedPlaylist.tsx
  const [show, setShow] = useState(false);
  const [blur, setBlur] = useState(false);

  function handleHeartClick(artistId: string) {
=======

  function handleClick(artistId: string) {
>>>>>>> parent of e980e98 (feature modal):client/src/searchComponents/TopTracks.tsx
    setTopTracks([]);
    setSearchResult([]);
    setShowTopTracks(true);
    addTopTracksToDB(topTracks)
    setStatus("Saved ❤️")
  };
  
  function handleReloadClick() {
    handleRelatedArtistData(artistId);
    setStatus("New Playlist Generated")
  }

  return (
    <div>
      {showTopTracks && (
        <>
          <div className="top-tracks-ul-title-container">
            <div
              role="button"
              className="top-tracks-ul-title-container-icon"
              onClick={() => handleReloadClick()}
            >
              <TbReload></TbReload>
            </div>
            <div className="top-tracks-title">{ status }</div>
            <GoHeart
              className="top-tracks-ul-title-container-icon"
              id="heart"
              style={{ color: heartColor }}
<<<<<<< HEAD:client/src/searchComponents/GeneratedPlaylist.tsx
              onClick={() => handleHeartClick(artistId)}
=======
              onClick={() => handleClick(artistId)}
>>>>>>> parent of e980e98 (feature modal):client/src/searchComponents/TopTracks.tsx
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
