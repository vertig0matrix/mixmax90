import { Artist } from './artist.interface.js'
import { Image } from './image.interface.js'

export interface Album {
    album_type: string,
    artists: Artist[],
    external_urls: {
        spotify: string,
    },
    href: string,
    id: string,
    images: Image[],
    is_playable: boolean,
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string,
}
