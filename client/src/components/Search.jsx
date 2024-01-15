import React from 'react'
import { useState } from 'react'
import { BsSearchHeart } from "react-icons/bs";


const Search = ({ search, setSearch }) => {
  const [topTracks, setTopTracks] = useState([]);
  let accessToken = null;
  
  const getToken = async () => {
    const url = "https://accounts.spotify.com/api/token";
    const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
    // console.log('ID',client_id)
    // console.log('SECRET', client_secret)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    });

    const data = await response.json();
    accessToken = data.access_token;
    // console.log(accessToken, "in getToken"); 
  };  

  const getRelatedArtistData = async () => {
    await getToken();

    const relatedArtistsUrl =
      "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb/related-artists";

    const relatedArtistsResponse = await fetch(relatedArtistsUrl, {
      method: "Get",
      headers: {
        Authorization: "Bearer " + `${accessToken}`,
      },
    });

    const artistData = await relatedArtistsResponse.json();

    const artistIds = getArtistIds(artistData);
    const tracks = await getTopTracks(artistIds);

    // Update the state with the fetched tracks
    setTopTracks(tracks);
  };

  const getArtistIds = (data) => {
    const artistIds = [];

    if (data && data.artists && Array.isArray(data.artists)) {
      data.artists.forEach((artist) => {
        if (artist.name) {
          artistIds.push(artist.id);
        }
      });
    }

    return artistIds;
  };

  const getTopTracks = async (artistIds) => {
    const topTracks = [];

    await Promise.all(
      artistIds.map(async (id) => {
        const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=GB`;
        const response = await fetch(url, {
          method: "Get",
          headers: {
            Authorization: "Bearer " + `${accessToken}`,
          },
        });

        const artistTopTracks = await response.json();
        topTracks.push(artistTopTracks);
      })
    );

    return topTracks;
  };

  return (
    <div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name=""
          id="search"
          role="searchbox"
          placeholder="search items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getRelatedArtistData} type="submit" id="submitButton">
          <BsSearchHeart />
        </button>
      </form>

      {/* Render the fetched track names */}
      <ul>
        {topTracks.map((artistTopTracks, index) => (
          <li key={index}>
            {artistTopTracks.tracks.map((track) => (
              <div key={track.id}>{track.name}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;