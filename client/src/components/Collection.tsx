// TODO add to collection
import { useEffect, useState } from 'react';
import { getPlaylist } from "./apiServices.js";
import { Track } from "../Interfaces/track.interface.ts";
import SavedPlaylist from './SavedPlaylist.tsx';


const Collection = () => {

  const [library, setLibrary] = useState<[]>([])

  useEffect(() => {

    const list = async function () {
      const res = await getPlaylist()
      setLibrary(res)
    }; list()
  }, [])

  let index = 0;

  return (
    <div>
      <div className='collection-title'>Collection</div>
      {library && library.map((playlist) => (
        <SavedPlaylist playlist={playlist} key={index++} />

      ))}
    </div>
  )
};

export default Collection;