// TODO implement spotify login feature
// TODO fix search icon functionality
// TODO fix heart icon functionality

import { useState } from "react";
import { searchForArtist, getTopTracks, getRelatedArtistData } from "./apiServices.js";
import SearchBar from "../searchComponents/SearchBar.tsx"
import SearchList from "../searchComponents/SearchList.tsx"
import GeneratedPlaylist from "../searchComponents/GeneratedPlaylist.tsx";
import { ArtistResponseObject } from "../Interfaces/artist.interface.ts"
import { Track, TracksResponse } from "../Interfaces/track.interface.ts";


interface SearchProps {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

interface ArtistList {
  artists: {
    items: []
  }
}

const Search: React.FC<SearchProps> = ({ name, setName, search, setSearch }) => {
  const [searchResult, setSearchResult] = useState<[]>([]);
  const [artistId, setArtistId] = useState<string>(null);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [showTopTracks, setShowTopTracks] = useState<boolean>(false);
  const [heartColor, setHeartColor] = useState<string>("#eee");


  async function handleSearch(): Promise<void> {
    let artistName: string = search.replace(/\s+/g, "+");
    const artistList: ArtistList = await searchForArtist(artistName)
    setSearchResult(artistList.artists.items)
    setSearch("");
  }

  async function handleRelatedArtistData(id: string): Promise<void> {
    setArtistId(id);
    const artistData: ArtistResponseObject = await getRelatedArtistData(id);
    const artistIds: string[] = getArtistIds(artistData);
    const tracks: TracksResponse = await getTopTracks(artistIds);
    const randomTracks: Track[] = getRandomTracksByArtist(tracks);

    setTopTracks(randomTracks);

  };

  const getArtistIds = (data: ArtistResponseObject) => {
    const artistIds: string[] = [];
    data.artists.forEach(artist => artistIds.push(artist.id));
    return artistIds;
  };

  function getRandomTracksByArtist(tracks: TracksResponse): Track[] {

    const result: Track[] = [];

    tracks.forEach((album) => {
      album.tracks.forEach((track) => {
        const randomIndex: number = Math.floor(Math.random() * album.tracks.length);
        const randomTrack: Track = album.tracks[randomIndex];
        if (!(result.includes(randomTrack))) {
          result.push(randomTrack);
        }
      });
    });
    let res = result.slice(0, 31);
    return res;
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

      <GeneratedPlaylist
        showTopTracks={showTopTracks}
        heartColor={heartColor}
        setTopTracks={setTopTracks}
        handleRelatedArtistData={handleRelatedArtistData}
        setSearchResult={setSearchResult}
        setShowTopTracks={setShowTopTracks}
        topTracks={topTracks}
        artistId={artistId}
        name={name}
        setName={setName}
      />
    </div>
  );
};

export default Search;
