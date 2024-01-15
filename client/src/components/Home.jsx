import React from 'react'
import { useState } from "react";
import Search from './Search'
import SuggestionList from './SuggestionList';
import MixList from './MixList'


const Home = () => {
   const [search, setSearch] = useState("");
  return (
    <main>
      <div>Home</div>
      <Search search={search} setSearch={setSearch} />
      <SuggestionList />
      <MixList />
    </main>
  );
}

export default Home