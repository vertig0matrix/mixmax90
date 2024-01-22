import React from "react";
import { TopTracks } from "../Interfaces/topTracks.interface.ts";
import { Track, TracksWrapper } from "../Interfaces/track.interface.ts";

interface SavedPlaylistProps {
  playlist: TopTracks
}

const SavedPlaylist: React.FC<SavedPlaylistProps> = ({ playlist }) => {
  let PL = playlist.tracks
  console.log(playlist.tracks[0].name)

  return (
    <>
      <div>
        {playlist.tracks.map(track =>
          <div>{track.name} </div>
        )}
        <div>❌</div>
      </div>
    </>
  )
};

export default SavedPlaylist;