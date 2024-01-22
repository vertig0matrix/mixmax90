import React, { useState, useEffect } from 'react';
import Search from './Search.tsx';
import Collection from './Collection.tsx';

const Home = () => {
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