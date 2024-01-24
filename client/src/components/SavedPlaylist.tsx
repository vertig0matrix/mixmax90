import React from "react";
import { TopTracks } from "../Interfaces/topTracks.interface.ts";
import { Track, TracksWrapper } from "../Interfaces/track.interface.ts";

interface SavedPlaylistProps {
  playlist: TopTracks
}

const SavedPlaylist: React.FC<SavedPlaylistProps> = ({ playlist }) => {
  let PL = playlist.tracks

  return (
    <div>
      {playlist.tracks.map(track =>
        <div key={track.id}>{track.name} </div>
      )}
    </div>
  )
};

export default SavedPlaylist;