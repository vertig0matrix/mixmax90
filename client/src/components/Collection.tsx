// TODO add to collection
import { useEffect, useState } from 'react';
import { getPlaylist } from "./apiServices.js";
import SavedPlaylist from './SavedPlaylist.tsx';

interface CollectionProps {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Collection: React.FC<CollectionProps> = ({ name, setName }) => {

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
        <SavedPlaylist name={name} setName={setName} playlist={playlist} key={index++} />

      ))}
    </div>
  )
};

export default Collection;