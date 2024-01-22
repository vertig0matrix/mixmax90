// TODO add to collection
import { useEffect, useState } from 'react';
import { getPlaylist } from "./apiServices.js";
import { Track } from "../Interfaces/track.interface.ts";
import SavedPlaylist from './SavedPlaylist.tsx';


const Collection = () => {
  
  const [library, setLibrary] = useState<Track[]>([])
  
  
  
  useEffect(() => { 
    
    const list = async function () {
      const res = await getPlaylist() 
      setLibrary(res)
    }; list()
  }, [])



  return (
    <main>
      <div className='collection-title'>Collection</div>
      {library.map((playlist) => (

        <SavedPlaylist playlist={playlist} />

      ))};
    </main>
  )
};

export default Collection;