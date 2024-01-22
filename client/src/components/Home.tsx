import React, { useState, useEffect } from 'react';
import Search from './Search.tsx';
import Collection from './Collection.tsx';
import { Track } from '../Interfaces/track.interface.ts';
import { getPlaylist } from './apiServices.js';


interface HomeProps {
  topTracks: Track[],
  setTopTracks: React.Dispatch<React.SetStateAction<Track[]>>,
  currentTracks: []
}

const Home: React.FC<HomeProps> = ({ }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Collection />
    </>
  );
};

export default Home;