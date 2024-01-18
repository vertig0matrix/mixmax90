// TODO refactor functions:  use axios
// TODO restructure the app
//TODO create APIservice.js to be .ts

import { useEffect, useState } from 'react'

import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Collection from "./components/Collection";


function App () {

  const [currentTracks, setCurrentTracks] = useState([]);

  async function getPlaylist () {
    await fetch("http://localhost:3000/toptracks")
      .then(res => setCurrentTracks(res))
      .catch(error => console.log(error))
  }

  // useEffect(() => {
  //   getPlaylist();
  // }, [])

  return (
    <main>
      <Header />
      <Home
        currentTracks={currentTracks}
        setCurrentTracks={setCurrentTracks}
        getPlaylist={getPlaylist}
      />
    </main>
  );
}

export default App
