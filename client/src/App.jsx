// TODO refactor functions:  use axios
// TODO restructure the app
//TODO create APIservice.js to be .ts

import { useEffect, useState } from 'react'

import './App.css'
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Collection from "./components/Collection.jsx";


function App () {

  const [currentTracks, setCurrentTracks] = useState([]);

  async function getPlaylist () {
    await fetch("http://localhost:3000/toptracks")
      .then(res => setCurrentTracks(res))
      .catch(error => console.log(error))
  }

  return (
    <>
      <Header />
      <Home
        currentTracks={currentTracks}
        setCurrentTracks={setCurrentTracks}
        getPlaylist={getPlaylist}
      />
    </>
  );
}

export default App
