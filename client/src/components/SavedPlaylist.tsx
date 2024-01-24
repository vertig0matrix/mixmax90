import React, { useState } from "react";
import { TopTracks } from "../Interfaces/topTracks.interface.ts";
import { Track, TracksWrapper } from "../Interfaces/track.interface.ts";
import TrackItem from "../searchComponents/TrackItem.tsx";

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
    <div>
      <button onClick={toggle} >toggle</button>
      {open && 
      playlist.tracks.map(track =>
          <TrackItem track={track} index={track.id}/>  
        )}
    </div>
  )
};

export default SavedPlaylist;