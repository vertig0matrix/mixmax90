// TODO finish addTopTracksToDB function

export async function getSpotifyToken () {
  const url = "https://accounts.spotify.com/api/token";
  const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;

  const token = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  })
  const tokenData = await token.json();
  return tokenData.access_token;
};

// search for artists by name in search box 
export async function searchForArtist (artistName) {
  const accessToken = await getSpotifyToken();
  const searchUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

  const searchedArtist = await fetch(searchUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + `${accessToken}`,
    },
  })
  try {
      const data = await searchedArtist.json()
      return data;
    } catch (error) {
      console.log(`Unable to search for artist:`, error)
    }
};

export async function getRelatedArtistData (clickedArtistId) {
  const accessToken = await getSpotifyToken();
  const relatedArtistsUrl = `https://api.spotify.com/v1/artists/${clickedArtistId}/related-artists`;
  const relatedArtistsResponse = await fetch(relatedArtistsUrl, {
    method: "Get",
    headers: {
      Authorization: "Bearer " + `${accessToken}`,
    },
  })

  const data = await relatedArtistsResponse.json();
  return data;
}

export async function getTopTracks (data) {
  const topTracks = [];
  const accessToken = await getSpotifyToken();
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
  return topTracks;
};

export async function addTopTracksToDB (tracks) {
  fetch("http://localhost:3000/toptracks", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tracks),
  });
  console.log('addTopTrackstoDB 5 💻')
};
