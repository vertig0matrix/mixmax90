import React, { useState } from "react";
import { GeneratedPlaylist } from "../Interfaces/generatedPlaylist.interface.ts";
import TrackItem from "../searchComponents/TrackItem.tsx";

interface SavedPlaylistProps {
  playlist: GeneratedPlaylist
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>
}

const SavedPlaylist: React.FC<SavedPlaylistProps> = ({ playlist, name, setName }) => {

  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle} >aaaa</button>
      {open && 
      playlist.tracks.map(track =>
          <TrackItem track={track} key={track.id}/>  
        )}
    </div>
  )
};

export default SavedPlaylist;