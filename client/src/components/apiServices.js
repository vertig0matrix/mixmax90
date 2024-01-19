
  // search for artists by name in search box 
export async function searchForArtist (artistName) {
  const accessToken  = await getSpotifyToken();  
  const searchUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

  const data = await fetch(searchUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + `${accessToken}`,
    },
  })
    .then((response) => response.json())
    .catch(error => console.log('error getting artist ID', error))
  
  return data;
};

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
  }).then(res => res.json())

  return token.access_token;
};

export async function getTopTracks (data) {
  const topTracks = [];
  const accessToken  = await getSpotifyToken();
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
  console.log('top tracks is running 3 🐈')
  return topTracks;
};

export async function addTopTrackstoDB (tracks) {
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