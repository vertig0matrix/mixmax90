// TODO implement spotify login feature
// TODO fix search icon functionality
// TODO fix heart icon functionality

import { useState } from "react";
import { searchForArtist, getTopTracks, addTopTracksToDB, getRelatedArtistData } from "./apiServices";
import SearchBar from "../searchComponents/SearchBar"
import SearchList from "../searchComponents/SearchList"
import TopTracks from "../searchComponents/TopTracks";

const Search = ({ search, setSearch }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [artistId, setArtistId] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [showTopTracks, setShowTopTracks] = useState(false);
  const [heartColor, setHeartColor] = useState("#eee");


  async function handleSearch () {
    let artistName = search.replace(/\s+/g, "+");
    const data = await searchForArtist(artistName)
    setSearchResult(data.artists.items)
    setSearch("");
  }

  async function handleRelatedArtistData (id) {
    setArtistId(id);
    const artistData = await getRelatedArtistData(id);

    const artistIds = getArtistIds(artistData);
    const tracks = await getTopTracks(artistIds);
    const randomTracks = getRandomTracksByArtist(tracks);

    setTopTracks(randomTracks);
    addTopTracksToDB(randomTracks)
    setHeartColor("#eee");
  };

  const getArtistIds = (data) => {
    const artistIds = [];
    data.artists.forEach(artist => artistIds.push(artist.id));
    return artistIds;
  };

  function getRandomTracksByArtist (tracks) {
    const uniqueArtists = new Set();
    const result = [];

    tracks.forEach((album) => {
      album.tracks.forEach((track) => {
        const artistId = track.artists[0].id;

        // Add the artist ID to the set of unique artists
        uniqueArtists.add(artistId);

        // Randomly select a track for the artist
        const randomIndex = Math.floor(Math.random() * album.tracks.length);
        const randomTrack = album.tracks[randomIndex];

        // Add the random track to the result array
        result.push(randomTrack);

      });
    });

    return result;
  };

  const heartClick = () => {
    
    // Update the color to red when clicked
    setHeartColor("red");
    // Your additional onClick logic goes here
    console.log("Heart clicked! 6");
  };


  return (
    <div>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        setSearch={setSearch}
      />

      <SearchList
        searchResult={searchResult}
        setTopTracks={setTopTracks}
        handleRelatedArtistData={handleRelatedArtistData}
        setSearchResult={setSearchResult}
        setShowTopTracks={setShowTopTracks}
      />

      <TopTracks
        showTopTracks={showTopTracks}
        heartColor={heartColor}
        heartClick={heartClick}
        setTopTracks={setTopTracks}
        handleRelatedArtistData={handleRelatedArtistData}
        setSearchResult={setSearchResult}
        setShowTopTracks={setShowTopTracks}
        topTracks={topTracks}
        artistId={artistId}
      />

    </div>
  );
};

export default Search;
