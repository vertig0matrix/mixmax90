import React, { useState } from "react";
import { TopTracks } from "../Interfaces/topTracks.interface.ts";
import { Track, TracksWrapper } from "../Interfaces/track.interface.ts";

interface SavedPlaylistProps {
  playlist: TopTracks
}

const SavedPlaylist: React.FC<SavedPlaylistProps> = ({ playlist }) => {
  let PL = playlist.tracks
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open)
  } 

  return (
    <>
      <div>
      <div>
      <button onClick={toggle} >toggle</button>
      {open && playlist.tracks.map(track =>
          <div key={track.id}>{track.name} </div>
        )}
    </div>

        <div>❌</div>
      </div>
    </>
  )
};

export default SavedPlaylist;