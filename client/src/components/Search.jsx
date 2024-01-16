import React from "react";
import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";

const Search = ({ search, setSearch }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [selectArtist, setSelectArtist] = useState([]);
  const [artistId, setArtistId] = useState(null);

  let accessToken = null;
  let artistName = search.replace(/\s+/g, "+");
  

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

  const getArtistId = async () => {
    await getToken();
    const searchUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    console.log('SEARCHURL',searchUrl)
    await fetch(searchUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + `${accessToken}`,
      },
    })
    .then((response) => response.json())
      .then((data) => {
        console.log('in getArtistId', data)
        setSelectArtist(()=>data.artists.items)
      })    
  }


  const getRelatedArtistData = async (clickedArtistId) => {
    setArtistId(clickedArtistId)
    console.log('ARTISTID', artistId)
      await getToken();

    // const relatedArtistsUrl =
    //   "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb/related-artists";
    const relatedArtistsUrl = `https://api.spotify.com/v1/artists/${clickedArtistId}/related-artists`;

    const relatedArtistsResponse = await fetch(relatedArtistsUrl, {
      method: "Get",
      headers: {
        Authorization: "Bearer " + `${accessToken}`,
      },
    });

    const artistData = await relatedArtistsResponse.json();

    const artistIds = getArtistIds(artistData);
    console.log("IDS", artistIds);
    const tracks = await getTopTracks(artistIds);
    console.log("TRACKS", tracks);
    const randomTracks = getRandomTracksByArtist(tracks);
    console.log("topTracks", randomTracks);
    setTopTracks(randomTracks);
  };

  const getArtistIds = (data) => {
    const artistIds = [];

    if (data && data.artists && Array.isArray(data.artists)) {
      data.artists.forEach((artist) => {
        if (artist.name) {
          artistIds.push(artist.id);
          // artistIds.push({id:artist.id, name:artist.name});
        }
      });
    }

    return artistIds;
  };

  const getTopTracks = async (data) => {
    const topTracks = [];

    await Promise.all(
      data.map(async (id) => {
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
    // console.log('TOPTRAX', topTracks)
    return topTracks;
  };

  function getRandomTracksByArtist(tracks) {
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

    return result;
  }

  //   const randomTracksByArtist = getRandomTrackByArtistId(TRACKS);

  //  async function getRandomTracksByArtists(data) {
  //   const artistTracksMap = {};

  //   // Group tracks by unique artist IDs
  //    data.tracks.forEach((track) => {
  //     track.artists.forEach((artist) => {
  //       const artistId = artist.id;
  //       if (!artistTracksMap[artistId]) {
  //         artistTracksMap[artistId] = [];
  //       }
  //       artistTracksMap[artistId].push(track);
  //     });
  //   });
  //   // console.log('artistTracksMap', artistTracksMap )
  //   // Get a random track for each artist
  //   const randomTracks = Object.values(artistTracksMap).map((tracks) => {
  //     const randomIndex = Math.floor(Math.random() * tracks.length);
  //     return tracks[randomIndex];
  //   });

  //   return randomTracks;
  // }

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
        <button onClick={getArtistId} type="submit" id="submitButton">
          {/* <button onClick={getRelatedArtistData} type="submit" id="submitButton"> */}
          <BsSearchHeart />
        </button>
      </form>
      <ul>
        {selectArtist.map((artist, index) => (
          <li onClick={()=>getRelatedArtistData(artist.id)} key={index}>
            {console.log(search)}
            Name: {artist.name}
            Id: {artist.id}            
          </li>
        ))}
      </ul>
      <ul>
        {topTracks.map((track, index) => (
          <li key={index}>
            Name: {track.artists[0].name}
            Song:{track.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
