'use strict';

import { Schema } from 'mongoose';
import imageSchema, { Image } from './imageSchema.model';
import artistSchema, { Artist } from './artistSchema.model';

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

const albumSchema: Schema = new Schema<Album>({
    album_type: { type: String },
    artists: { type: [artistSchema] },
    external_urls: {
        spotify: { type: String },
    },
    href: { type: String },
    id: { type: String },
    images: { type: [imageSchema] },
    is_playable: { type: Boolean },
    name: { type: String },
    release_date: { type: String },
    release_date_precision: { type: String },
    total_tracks: { type: Number },
    type: { type: String },
    uri: { type: String },
})

export default albumSchema;