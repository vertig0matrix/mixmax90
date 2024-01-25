import { useState } from 'react';
import Search from './Search.tsx';
import Collection from './Collection.tsx';

const Home = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("")

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        name={name}
        setName={setName}
      />
      <Collection name={name} setName={setName}/>
    </>
  );
};

export default Home;