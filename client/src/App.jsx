import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Player from "./components/Player";

function App() {

  return (
    <>
      <p>app working</p>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Player />
    </>
  );
}

export default App
