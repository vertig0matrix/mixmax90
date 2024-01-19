// TODO check the use/necessity of props in Search.jsx  
// TODO create a util file for the functions
// TODO abstract components from html
// TODO implement spotify login feature
// TODO fix search icon functionality

import React from "react";
import { useEffect, useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TbReload } from "react-icons/tb";
import { getSpotifyToken, getTopTracks, addTopTrackstoDB } from "./apiServices";

const Search = ({ search, setSearch }) => {

  const [searchResult, setSearchResult] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [artistId, setArtistId] = useState(null);
  const [showTopTracks, setShowTopTracks] = useState(false);
  const [heartColor, setHeartColor] = useState("#eee");

  let artistName = search.replace(/\s+/g, "+");

  // search for artists by name in search box 
  const searchForArtist = async () => {
    const accessToken  = await getSpotifyToken();  
    const searchUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    await fetch(searchUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + `${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {setSearchResult(() => data.artists.items), console.log('searchForArtist running 🔥', data.artists)})
      .catch(error => console.log('error getting artist ID', error))
    setSearch("");
  };

  const getRelatedArtistData = async (clickedArtistId) => {
    setArtistId(clickedArtistId)
    const accessToken  = await getSpotifyToken();

    const relatedArtistsUrl = `https://api.spotify.com/v1/artists/${clickedArtistId}/related-artists`;

    const relatedArtistsResponse = await fetch(relatedArtistsUrl, {
      method: "Get",
      headers: {
        Authorization: "Bearer " + `${accessToken}`,
      },
    });

    const artistData = await relatedArtistsResponse.json();
    console.log('getRelatedArtistData running 1 🌊')

    const artistIds = getArtistIds(artistData);
    const tracks = await getTopTracks(artistIds);
    const randomTracks = getRandomTracksByArtist(tracks);
    setTopTracks(randomTracks);
    // save to DB
    addTopTrackstoDB(randomTracks)
    setHeartColor("#eee");
  };

  const getArtistIds = (data) => {
    const artistIds = [];

    if (data && data.artists && Array.isArray(data.artists)) {
      data.artists.forEach((artist) => {
        if (artist.name) {
          artistIds.push(artist.id);
          console.log('getArtistIds running 2 🦖')
          // artistIds.push({id:artist.id, name:artist.name});
        }
      });
    }

    return artistIds;
  };


  function getRandomTracksByArtist (tracks) {
    const uniqueArtists = new Set();
    const result = [];

    tracks.forEach((album) => {
      album.tracks.forEach((track) => {
        const artistId = track.artists[0].id;

        // Check if the artist ID is unique
        if (!uniqueArtists.has(artistId)) {
          // Add the artist ID to the set of unique artists
          uniqueArtists.add(artistId);

          // Randomly select a track for the artist
          const randomIndex = Math.floor(Math.random() * album.tracks.length);
          const randomTrack = album.tracks[randomIndex];

          // Add the random track to the result array
          result.push(randomTrack);
        }
      });
    });

    console.log('getRandomTracksByArtist 4 🚂')
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
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          size="50"
          name=""
          id="search"
          role="searchbox"
          placeholder=" Find music like..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchForArtist} type="submit" id="submitButton">
          <BsSearchHeart />
        </button>
      </form>

      <ul className="artist-search-ul">
        {searchResult.map((artist, index) => (
          <li
            className="artist-search-li"
            onClick={() => {
              {
                console.log("in selectArtist.map");
              }
              setTopTracks([]);
              // click creates
              getRelatedArtistData(artist.id);
              setSearchResult([]);
              setShowTopTracks(true);
            }}
            key={index}
          >
            <div className="artist-search-thumb-container">
              {artist.images[2] && (
                <img
                  className="artist-search-thumb-img"
                  src={artist.images[2].url}
                  alt=""
                />
              )}
            </div>
            <div className="artist-search-name">{artist.name}</div>
            {/* Id: {artist.id} */}
          </li>
        ))}
      </ul>

      {showTopTracks && (
        <ul className="top-tracks-ul">
          <div className="top-tracks-ul-title-container">
            <div
              className="top-tracks-ul-title-container-icon"
              onClick={() => {
                {
                  console.log("in reload");
                }
                setTopTracks([]);
                getRelatedArtistData(artistId);
                setSearchResult([]);
                setShowTopTracks(true);
              }}
            >
              <TbReload />
            </div>
            <div className="top-tracks-title">Nice work!</div>
            <div
              className="top-tracks-ul-title-container-icon"
              id="heart"
              style={{ color: heartColor }}
              onClick={heartClick}
            >
              <GoHeart />
            </div>
          </div>
          {topTracks.map((track, index) => (
            <li className="top-tracks-li" key={index}>
              {/* { console.log('TRACK STRUCTURE',track)} */}
              <div className="top-tracks-thumb-container">
                {track.album.images[2] && (
                  <img
                    className="top-tracks-thumb-img"
                    src={track.album.images[2].url}
                    alt=""
                  />
                )}
              </div>
              <div className="track-details">
                <div className="track-details-track">{`${track.name}`}</div>
                <div className="track-details-artist">{`${track.artists[0].name}`}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
