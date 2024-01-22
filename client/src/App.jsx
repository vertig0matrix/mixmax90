import { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Collection from "./components/Collection.jsx";
import { getPlaylist } from './components/apiServices';


function App () {

  const [currentTracks, setCurrentTracks] = useState([]);

  useEffect(() => {
    const list = getPlaylist()
    setCurrentTracks(list)
  }, [])

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
