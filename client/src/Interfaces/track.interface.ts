import { Album } from './album.interface.js';
import { Artist } from './artist.interface.js';

export interface Track {
    album: Album,
    artists: Artist[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: {
        isrc: string,
    },
    external_urls: {
        spotify: string,
    },
    href: string,
    id: string,
    is_local: boolean,
    is_playable: boolean,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
}