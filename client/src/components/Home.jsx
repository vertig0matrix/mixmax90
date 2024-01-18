// TODO rename 'main' tag

import React from 'react'
import { useState } from "react";
import Search from './Search'
import Collection from './Collection';


const Home = ({ topTracks, setTopTracks, currentTracks }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search
        topTracks={topTracks}
        setTopTracks={setTopTracks}
        search={search}
        setSearch={setSearch}
        currentTracks={currentTracks}
      />
      <Collection />
    </>
  );
};

export default Home